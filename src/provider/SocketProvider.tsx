import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Socket} from 'socket.io-client';
import {AppState, AppStateStatus} from 'react-native';
import {PATH, SOCKET} from '../constants/constants';

const SocketContext = createContext<{socket: Socket | undefined}>({
  socket: undefined,
});

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({children}: {children: ReactNode}) => {
  const [socket, setSocket] = useState<Socket | undefined>();
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState,
  );

  useEffect(() => {
    SOCKET.on('connect', () => {
      console.log('Connected to server:', SOCKET.id);
      setSocket(SOCKET);
    });
    SOCKET.on('disconnect', reason => {
      console.log('Disconnected from server:', reason);
    });
    return () => {
      SOCKET.disconnect();
    };
  }, [PATH]);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        if (socket && !socket.connected) {
          socket.connect();
        }
      } else if (nextAppState.match(/inactive|background/)) {
        socket?.disconnect();
      }
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, [appState, socket]);

  return (
    <SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>
  );
};
