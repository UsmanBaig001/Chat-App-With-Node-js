import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import usersReducer from './slices/usersSlice';
import authReducer from './slices/authSlice';
import chatRoomReducer from './slices/chatRoomsSlice';
import userReducer from './slices/currentUserSlice';
import type {TypedUseSelectorHook} from 'react-redux';
export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    currentUser: userReducer,
    chatRoom: chatRoomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//  Hooks for Store

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
