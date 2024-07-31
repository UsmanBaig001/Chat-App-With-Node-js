import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useAppDispatch} from '../../../redux/store';
import {googleSignin, loginUser} from '../../../redux/slices/authSlice';
import {NavigationProps} from '../../../types/Types';

export const useLogin = ({navigation}: NavigationProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const goBackCustom = () => {
    navigation.navigate('MainAuth');
  };

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleGmailLogin = async () => {
    try {
      dispatch(googleSignin);
    } catch (error) {
      ToastAndroid.show('Error signing in with Google:', ToastAndroid.SHORT);
      console.error('Error signing in with Google: ', error);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        throw new Error('Please enter all fields');
      }
      console.log(
        'This is the login button clicked. Email: ' +
          email +
          ', Password: ' +
          password,
      );
      await dispatch(loginUser({email, password}));
      setLoading(false);
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      setLoading(false);
    }
  };

  return {
    handleEmail,
    handlePassword,
    handleLogin,
    email,
    password,
    goBackCustom,
    handleGmailLogin,
    loading,
  };
};
