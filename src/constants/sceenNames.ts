import {RootStackParamsList} from '../types/Types';

export type ScreenName = keyof RootStackParamsList;

export const SCREEN_NAMES: Record<ScreenName, ScreenName> = {
  Messages: 'Messages',
  Contacts: 'Contacts',
  Settings: 'Settings',
  Chat: 'Chat',
  Profile: 'Profile',
  UpdatePassword: 'UpdatePassword',
  Search: 'Search',
  Login: 'Login',
  ForgetPassword: 'ForgetPassword',
  SignUp: 'SignUp',
  MainAuth: 'MainAuth',
  TabNavigation: 'TabNavigation',
};
