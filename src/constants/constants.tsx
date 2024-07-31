import {Image} from 'react-native';
import AuthScreen from '../screens/auth/authScreen/AuthScreen';
import ForgetPass from '../screens/auth/forgetPass/ForgetPass';
import Login from '../screens/auth/login/Login';
import Signup from '../screens/auth/signup/Signup';
import Messages from '../screens/messages/Messages';
import Search from '../screens/search/Search';
import Settings from '../screens/settings/Settings';
import {iconMessages, iconSettings, iconUser} from '../assets/images/Images';
import Contacts from '../screens/contacts/Contacts';
import Chat from '../screens/chat/Chat';
import Profile from '../screens/profile/Profile';
import UpdatePassword from '../screens/updatePassword/UpdatePassword';
import {TabBarIcon} from '../types/Types';
import {io} from 'socket.io-client';

export const TAB_SCREEN_NAMES = {
  Messages: 'Messages',
  Contacts: 'Contacts',
  Settings: 'Settings',
  Chat: 'Chat',
  Profile: 'Profile',
  UpdatePassword: 'UpdatePassword',
  Search: 'Search',
};
export const STACK_SCREEN_NAMES = {
  Login: 'Login',
  ForgetPassword: 'ForgetPassword',
  SignUp: 'SignUp',
  MainAuth: 'MainAuth',
  TabNavigation: 'TabNavigation',
};
export const AUTH_STACK = [
  {
    screen: STACK_SCREEN_NAMES.MainAuth,
    component: AuthScreen,
  },
  {
    screen: STACK_SCREEN_NAMES.Login,
    component: Login,
  },
  {
    screen: STACK_SCREEN_NAMES.SignUp,
    component: Signup,
  },
  {
    screen: STACK_SCREEN_NAMES.ForgetPassword,
    component: ForgetPass,
  },
];
export const TAB_STACK = [
  {
    screen: TAB_SCREEN_NAMES.Messages,
    component: Messages,
    options: {
      headerShown: false,
      tabBarIcon: ({color, size}: TabBarIcon) => (
        <Image
          source={iconMessages}
          style={{tintColor: color, width: size, height: size}}
        />
      ),
    },
  },
  {
    screen: TAB_SCREEN_NAMES.Contacts,
    component: Contacts,
    options: {
      headerShown: false,
      tabBarIcon: ({color, size}: TabBarIcon) => (
        <Image
          source={iconUser}
          style={{tintColor: color, width: size, height: size}}
        />
      ),
    },
  },
  {
    screen: TAB_SCREEN_NAMES.Settings,
    component: Settings,
    options: {
      headerShown: false,
      tabBarIcon: ({color, size}: TabBarIcon) => (
        <Image
          source={iconSettings}
          style={{tintColor: color, width: size, height: size}}
        />
      ),
    },
  },
  {
    screen: TAB_SCREEN_NAMES.Chat,
    component: Chat,
    options: {
      headerShown: false,
      tabBarVisible: false,
      tabBarStyle: {display: 'none'},
      tabBarIconStyle: {display: 'none'},
      tabBarLabelStyle: {display: 'none'},
      tabBarItemStyle: {display: 'none'},
    },
  },
  {
    screen: TAB_SCREEN_NAMES.Profile,
    component: Profile,
    options: {
      headerShown: false,
      tabBarVisible: false,
      tabBarIconStyle: {display: 'none'},
      tabBarLabelStyle: {display: 'none'},
      tabBarItemStyle: {display: 'none'},
    },
  },
  {
    screen: TAB_SCREEN_NAMES.UpdatePassword,
    component: UpdatePassword,
    options: {
      headerShown: false,
      tabBarVisible: false,
      tabBarIconStyle: {display: 'none'},
      tabBarLabelStyle: {display: 'none'},
      tabBarItemStyle: {display: 'none'},
    },
  },
  {
    screen: TAB_SCREEN_NAMES.Search,
    component: Search,
    options: {
      headerShown: false,
      tabBarVisible: false,
      tabBarStyle: {display: 'none'},
      tabBarIconStyle: {display: 'none'},
      tabBarLabelStyle: {display: 'none'},
      tabBarItemStyle: {display: 'none'},
    },
  },
];
export const FIREBASE_COLLECTIONS = {
  Users: 'Users',
  ChatRooms: 'ChatRooms',
  Messages: 'Messages',
};
export const PATH = process.env.PATH_URL;
export const SOCKET = io(`${PATH}`);
