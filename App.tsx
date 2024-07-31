import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {SocketProvider} from './src/provider/SocketProvider';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <SocketProvider>
        <AppNavigator />
      </SocketProvider>
    </Provider>
  );
}

export default App;
