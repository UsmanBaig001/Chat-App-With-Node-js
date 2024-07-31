import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {NavigationProps} from '../../../types/Types';
import {useAppDispatch} from '../../../redux/store';
import {SignupUser} from '../../../redux/slices/authSlice';

const useSignup = ({navigation}: NavigationProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
  const handleName = (text: string) => {
    setDisplayName(text);
  };
  const handleConfirmPassword = (text: string) => {
    setConfirmPassword(text);
  };
  const handleSignup = async () => {
    setLoading(true);
    try {
      if (!displayName || !email || !password || !confirmPassword) {
        ToastAndroid.show('Please enter all fields', ToastAndroid.SHORT);
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT);
        setLoading(false);
        return;
      }
      await dispatch(
        SignupUser({email, password, displayName, confirmPassword}),
      );
      setLoading(false);
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      setLoading(false);
    }
  };
  return {
    handleEmail,
    handlePassword,
    handleName,
    handleConfirmPassword,
    handleSignup,
    email,
    displayName,
    confirmPassword,
    password,
    loading,
    goBackCustom,
  };
};

export default useSignup;
