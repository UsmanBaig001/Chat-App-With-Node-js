import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamsList} from '../types/Types';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import TabNavigator from './TabNavigator';
import {StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AUTH_STACK} from '../constants/constants';

const Stack = createStackNavigator<RootStackParamsList>();
function AppNavigator() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <LinearGradient
      colors={['#000', '#43116A']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{flex: 1}}>
      <View style={{flex: 1, paddingTop: 28}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainAuth">
            {!user ? (
              <Stack.Group>
                {AUTH_STACK.map((item, i: number) => {
                  return (
                    <Stack.Screen
                      key={i}
                      name={item.screen as keyof RootStackParamsList}
                      component={item.component}
                      options={{headerShown: false}}
                    />
                  );
                })}
              </Stack.Group>
            ) : (
              <Stack.Group>
                <Stack.Screen
                  name="TabNavigation"
                  options={{headerShown: false}}
                  component={TabNavigator}
                />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </LinearGradient>
  );
}

export default AppNavigator;
