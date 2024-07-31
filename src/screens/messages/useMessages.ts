import {useEffect, useMemo, useState} from 'react';
import {getUsers} from '../../redux/slices/usersSlice';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getUserData} from '../../redux/slices/currentUserSlice';
import {getChatRooms} from '../../redux/slices/chatRoomsSlice';
import {Alert, ToastAndroid} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LogOut} from '../../redux/slices/authSlice';
import axios from 'axios';
import {PATH, SOCKET} from '../../constants/constants';
import {
  ChatRoom,
  ChatUserData,
  UserData,
  userDataType,
} from '../../types/Types';

const useMessages = () => {
  const [chatUsers, setChatUsers] = useState<UserData[]>([]);
  const [userData, setUserData] = useState<userDataType | null>(null);
  const [chatRoomsData, setChatRoomsData] = useState<ChatRoom[] | []>([]);
  const uid = auth().currentUser?.uid;
  const dispatch = useAppDispatch();
  const Users = useAppSelector(state => state.users?.Users);
  const ChatRoomsData = useAppSelector(state => state.chatRoom?.chatRooms);
  const UserData = useAppSelector(state => state.currentUser?.user);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserData());
    dispatch(getChatRooms());
  }, [dispatch]);

  useEffect(() => {
    if (ChatRoomsData) {
      setChatRoomsData(ChatRoomsData);
    }
  }, [ChatRoomsData]);
  useEffect(() => {
    if (UserData) {
      setUserData(UserData);
    }
  }, [UserData]);
  useEffect(() => {
    SOCKET.on('chatRoom', (newRoom: ChatRoom) => {
      console.log('Received new chat room:', newRoom);
      setChatRoomsData((prevRooms: ChatRoom[]) => [...prevRooms, newRoom]);
    });
    SOCKET.on('user', (newUser: UserData) => {
      setUserData(newUser);
    });
  }, []);

  const filteredData = useMemo(() => {
    return Array.isArray(chatRoomsData)
      ? chatRoomsData.filter(chatRoom => {
          return chatRoom?.senderUid === uid || chatRoom?.receiverUid === uid;
        })
      : [];
  }, [chatRoomsData, uid]);

  useEffect(() => {
    const handleUserData = async () => {
      const uid = userData?.uid;
      const chatUserIds = filteredData.map(chatRoom =>
        chatRoom?.senderUid === uid
          ? chatRoom?.receiverUid
          : chatRoom?.senderUid,
      );
      if (chatUserIds.length === 0) {
        return;
      }
      try {
        const response = await axios.get(`${PATH}/users`, {
          params: {ids: chatUserIds.join(',')},
        });
        setChatUsers(response.data);
      } catch (error) {
        console.error('Error fetching chat users:', error);
        ToastAndroid.show('Error fetching chat users', ToastAndroid.SHORT);
      }
    };
    handleUserData();
  }, [filteredData, userData]);

  const handleDelete = async (chatRoomId: string) => {
    try {
      await axios.delete(`${PATH}/chatroom`, {params: {chatRoomId}});
      ToastAndroid.show('Chat room deleted successfully', ToastAndroid.SHORT);
      setChatRoomsData((prevRooms: ChatRoom[]) =>
        prevRooms.filter((room: {_id: string}) => room._id !== chatRoomId),
      );
    } catch (error) {
      ToastAndroid.show('Error deleting chat room:', ToastAndroid.SHORT);
      console.error('Error deleting chat room:', error);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () =>
            ToastAndroid.show('Cancel Pressed', ToastAndroid.SHORT),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(LogOut());
          },
        },
      ],
      {cancelable: false},
    );
  };

  return {
    Users,
    userData,
    handleLogout,
    filteredData,
    uid,
    handleDelete,
    chatUsers,
  };
};

export default useMessages;
