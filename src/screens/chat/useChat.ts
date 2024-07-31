import {useEffect, useState} from 'react';
import {
  ChatMessageList,
  NavigationProps,
  userDataType,
} from '../../types/Types';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';
import axios from 'axios';
import {PATH, SOCKET} from '../../constants/constants';

const useChat = ({navigation, route}: NavigationProps) => {
  const [messageList, setMessagesList] = useState<ChatMessageList>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatUser, setChatUser] = useState<userDataType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route?.params?.user) {
      const userToSet = route?.params?.user;
      setChatUser(userToSet);
    }
  }, [route.params]);
  useEffect(() => {
    SOCKET.on('message', (message: ChatMessageList) => {
      setMessagesList(message);
    });
    const fetchMessages = async () => {
      const chatRoomId = route.params?.item?.chatRoomId;
      const response = await axios.get(`${PATH}/messages`, {
        params: {chatRoomId: chatRoomId},
      });
      setMessagesList(response.data as ChatMessageList);
    };
    fetchMessages();
  }, [route.params?.item?.chatRoomId]);

  const handleChange = (text: string) => {
    setInputMessage(text);
  };

  const goBackCustom = () => {
    navigation.goBack();
  };
  const sendMessage = async () => {
    setInputMessage('');
    setLoading(true);
    if (!inputMessage.trim()) {
      ToastAndroid.show('Please enter a message', ToastAndroid.SHORT);
      return;
    }
    const chatRoomId = route.params?.item?.chatRoomId;
    const data = {
      message: inputMessage.trim(),
      sendBy: auth().currentUser?.uid,
      receiveBy: chatUser?.uid,
      createdAt: new Date(),
      dateStamp: 'Sending Messages',
      chatRoomId: chatRoomId,
    };
    setMessagesList([...messageList, data as any]);
    try {
      const messageData = {
        message: inputMessage.trim(),
        sendBy: auth().currentUser?.uid,
        receiveBy: chatUser?.uid,
        createdAt: new Date().toLocaleTimeString(),
        dateStamp: new Date().toLocaleDateString(),
        chatRoomId: chatRoomId,
      };
      await axios.post(`${PATH}/message`, messageData);
      setLoading(false);
    } catch (error) {
      ToastAndroid.show('Messsage Sent Failed ! ', ToastAndroid.SHORT);
      setLoading(false);
      console.log('error', error);
    }
  };
  return {
    handleChange,
    inputMessage,
    loading,
    chatUser,
    goBackCustom,
    sendMessage,
    messageList,
  };
};

export default useChat;
