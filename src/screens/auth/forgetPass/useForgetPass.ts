import {useState} from 'react';
import {NavigationProps} from '../../../types/Types';
import {useAppDispatch} from '../../../redux/store';
import {forgotPassword} from '../../../redux/slices/authSlice';
import {ToastAndroid} from 'react-native';

const useForgetPass = ({navigation}: NavigationProps) => {
  const [email, setEmail] = useState('');
  const goBackCustom = () => {
    navigation.goBack();
  };
  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const dispatch = useAppDispatch();
  const handleForgotPassword = () => {
    try {
      dispatch(forgotPassword(email));
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  return {email, handleEmail, goBackCustom, handleForgotPassword};
};

export default useForgetPass;
