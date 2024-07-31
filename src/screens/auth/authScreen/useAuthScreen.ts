import {googleSignin} from '../../../redux/slices/authSlice';
import {useAppDispatch} from '../../../redux/store';
import {NavigationProps} from '../../../types/Types';

const useAuthScreen = ({navigation, route}: NavigationProps) => {
  const dispatch = useAppDispatch();
  const handleGmailLogin = async () => {
    try {
      dispatch(googleSignin);
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };
  return {handleGmailLogin};
};
export default useAuthScreen;
