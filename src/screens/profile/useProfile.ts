import {useEffect, useState} from 'react';
import {NavigationProps, userDataType} from '../../types/Types';
import auth from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {ToastAndroid} from 'react-native';
import {getUserData} from '../../redux/slices/currentUserSlice';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {PATH, SOCKET} from '../../constants/constants';

const useProfile = ({navigation}: NavigationProps) => {
  const user = auth().currentUser?.uid;
  const [name, setName] = useState<string | null>('');
  const [userData, setUserData] = useState<userDataType | null>(null);
  const [email, setEmail] = useState<string | null>('');
  const [status, setStatus] = useState<string | null>('');
  const [imageUri, setImageUri] = useState('');
  const [imageName, setImageName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.currentUser?.user);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    SOCKET.on('user', (newUser: userDataType) => {
      setUserData(newUser);
    });
  }, []);
  useEffect(() => {
    setName(userData?.displayName ?? '');
    setStatus(userData?.status ?? '');
    setEmail(userData?.email ?? '');
  }, [userData]);

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handleName = (text: string) => {
    setName(text);
  };

  const handleStatus = (text: string) => {
    setStatus(text);
  };

  const goBackCustom = () => {
    navigation.navigate('Settings');
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      ToastAndroid.show('Updating profile. Please wait...', ToastAndroid.SHORT);

      // const response = await fetch(imageUri);
      // const blob = await response.blob();
      // const pathToFile = `images/${user}/profileImage`;
      // const reference = storage().ref(pathToFile);
      // const uploadTask = reference.put(blob);

      // uploadTask.on(
      //   'state_changed',
      //   snapshot => {
      //     const progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     ToastAndroid.show(
      //       `Upload is ${progress.toFixed(2)}% done`,
      //       ToastAndroid.SHORT,
      //     );
      //   },
      //   error => {
      //     console.error('Error during upload:', error);
      //     ToastAndroid.show('Error during upload', ToastAndroid.LONG);
      //   },
      //   async () => {
      //     ToastAndroid.show(
      //       'Upload completed successfully',
      //       ToastAndroid.SHORT,
      //     );

      //     const downloadURL = await uploadTask.snapshot?.ref.getDownloadURL();

      // if (downloadURL) {
      //   await axios.patch(
      //     `${PATH}/user`,
      //     {
      //       displayName: name,
      //       email: email,
      //       status: status,
      //       photoUrl: downloadURL,
      //     },
      //     {
      //       params: {uid: user},
      //     },
      //   );
      // } else {
      await axios.patch(
        `${PATH}/user`,
        {
          displayName: name,
          email: email,
          status: status,
        },
        {
          params: {uid: user},
        },
      );
      // }
      ToastAndroid.show('User updated successfully', ToastAndroid.SHORT);
      // },
      // );
      setLoading(false);
    } catch (error) {
      ToastAndroid.show(
        'Something Went Wrong While Updating profile!',
        ToastAndroid.LONG,
      );
      console.log('error while updating User', error);
      setLoading(false);
    }
  };

  const handleImage = async () => {
    let options: any = {
      mediaType: 'photo',
      quality: 1,
      aspect: [4, 3],
      includeBase64: false,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        return ToastAndroid.show(
          'User cancelled image picker',
          ToastAndroid.LONG,
        );
      }

      const resp: string | undefined = response?.assets?.[0]?.uri;
      const respName = response?.assets?.[0]?.fileName;
      if (resp) {
        setImageUri(resp);
        setImageName(respName as string);
      }
    });
  };

  return {
    email,
    name,
    status,
    imageUri,
    loading,
    imageName,
    userData,
    goBackCustom,
    handleEmail,
    handleName,
    handleStatus,
    handleUpdateProfile,
    handleImage,
  };
};

export default useProfile;
