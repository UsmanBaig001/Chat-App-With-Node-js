import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {KeyboardTypeOptions, TextStyle, ViewStyle} from 'react-native';

export type ChatRoom = {
  chatRoomId: string;
  receiverUid: string;
  lastMesssage: string;
  senderUid: string;
  _id: string;
};

export interface ChatRoomsState {
  chatRooms: ChatRoom[] | null;
  loading: boolean;
  error: string | null;
}

export type ItemProps = {
  photoUrl: string;
  displayName: string;
  timeAgo: string;
  status: string;
};
export type ChatProps = {
  photoUrl: string;
  displayName: string;
  timeAgo: string;
  status: string;
  uid: string;
};
export type RootStackParamsList = {
  SignUp: undefined;
  Login: undefined;
  ForgetPassword: undefined;
  MainAuth: undefined;
  TabNavigation: undefined;
  Profile: undefined;
  UpdatePassword: undefined;
  Search: undefined;
  Messages: undefined;
  Settings: undefined;
  Contacts: undefined;
  Chat: {item: ChatRoom; user: userDataType};
};
export type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList, keyof RootStackParamsList>;
};
export type user = {
  uid: string;
  displayName: string;
  email: string;
};

export type TabBarIcon = {
  color: string;
  size: number;
};

export interface CounterState {
  Users: user[];
  loading: boolean;
  error: string | null;
}
export type userDataType = {
  email: string | null;
  displayName: string | null;
  uid: string | null;
  status: string | null;
  photoUrl: string | null;
};
export type UserData = {
  email: string;
  password: string;
  status: string | null;
  uid: string;
  displayName: string;
  photoUrl: string | null;
  confirmPassword: string | null;
};
export type ChatUserData = {
  email: string;
  status: string | null;
  uid: string;
  displayName: string;
  photoUrl: string | null;
};
export type FilterUserData = {
  email?: string;
  password?: string;
  status?: string;
  uid?: string;
  displayName?: string;
  photoUrl?: string;
  confirmPassword?: string;
};
export interface AuthState {
  user: FirebaseAuthTypes.User | null;
  isLoading: boolean;
  error: string | null;
}
export interface SignUp {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignIn {
  email: string;
  password: string;
}
export interface User {
  displayName: string;
  email: string;
}
export type Personal = {
  email: string | null;
  displayName: string | null;
  uid: string | null;
  status: string | null;
  photoUrl: string | null;
};
export type ImageOptions = {
  mediaType: string;
  maxWidth: number;
  maxHeight: number;
  quality: number;
  includeBase64: boolean;
};

export type ImageData = {
  uri: string;
  orignalPath: string;
  width: number;
  height: number;
  fileSize: number;
  type: string;
  base64: string;
  fileName: string;
};
export type ImageObject = {
  Asset: ImageData[] | undefined;
};
export type TextInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
  keyboardType: KeyboardTypeOptions;
  styles: Object;
};

export type CustomButtonProps = {
  onPress: () => void;
  buttonText: string;
  colors: string[];
  start: {x: number; y: number};
  end: {x: number; y: number};
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
  touchStyle: object;
};

export type ChatMessages = {
  message: string;
  sendBy: string;
  receiveBy: string;
  dateStamp: string;
  createdAt: string;
};
export type ChatMessageList = ChatMessages[];

export type TabStackOptions = {
  headerShown: boolean;
  tabBarVisible: boolean;
  tabBarStyle: {
    display: 'none' | 'flex';
  };
  tabBarIconStyle: {
    display: 'none' | 'flex';
  };
  tabBarLabelStyle: {
    display: 'none' | 'flex';
  };
  tabBarItemStyle: {
    display: 'none' | 'flex';
  };
};
export type UserProps = {
  photoURL: string | null;
  displayName: string | null;
  status: string | null;
};
