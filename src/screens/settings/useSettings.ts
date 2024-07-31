import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getUserData} from '../../redux/slices/currentUserSlice';
import {NavigationProps, userDataType} from '../../types/Types';
import {SOCKET} from '../../constants/constants';

const useSettings = ({navigation}: NavigationProps) => {
  const [userData, setUserData] = useState<userDataType | null>(null);
  const goBackCustom = () => {
    navigation.goBack();
  };
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.currentUser.user);
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  useEffect(() => {
    SOCKET.on('user', (newUser: userDataType) => {
      setUserData(newUser);
    });
  }, []);

  return {userData, goBackCustom};
};

export default useSettings;
