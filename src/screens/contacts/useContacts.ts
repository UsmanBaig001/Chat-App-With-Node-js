import {useEffect, useState} from 'react';
import {NavigationProps, UserData} from '../../types/Types';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getUsers} from '../../redux/slices/usersSlice';
import {generateUid} from '../../utils/randomUid';
import axios from 'axios';
import {PATH} from '../../constants/constants';
const useContacts = ({navigation, route}: NavigationProps) => {
  const [users, setUsers] = useState<{[key: string]: UserData[]}>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const chatRoomId = generateUid();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.users.Users);
  const currentUser = useAppSelector(state => state.currentUser.user);

  const handleUserPress = (user: UserData) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleAddChat = async () => {
    setLoading(true);
    const receiver = selectedUser;
    const sender = currentUser;
    try {
      await axios.post(`${PATH}/chatroom`, {
        senderUid: sender?.uid,
        receiverUid: receiver?.uid,
        chatRoomId: chatRoomId,
      });
      setLoading(false);
      setModalVisible(false);
      navigation.navigate('Messages');
    } catch (error) {
      console.log('error', error);
      setLoading(false);
      setModalVisible(false);
    }
  };

  useEffect(() => {
    try {
      dispatch(getUsers()).then(() => {
        setLoading(false);
      });
    } catch (error) {
      console.error('Error dispatching Users:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (userData.length === 0) {
      return;
    }
    const groupedUsers: {[key: string]: UserData[]} = {};
    userData.forEach(user => {
      const firstLetter = user.displayName.charAt(0).toUpperCase();
      if (!groupedUsers[firstLetter]) {
        groupedUsers[firstLetter] = [];
      }
      groupedUsers[firstLetter].push(user);
    });

    const sortedKeys = Object.keys(groupedUsers).sort();
    const sortedUsers: {[key: string]: UserData[]} = {};
    sortedKeys.forEach(key => {
      sortedUsers[key] = groupedUsers[key];
    });

    setUsers(sortedUsers);
  }, [userData]);

  return {
    users,
    loading,
    handleUserPress,
    modalVisible,
    setModalVisible,
    handleAddChat,
  };
};

export default useContacts;
