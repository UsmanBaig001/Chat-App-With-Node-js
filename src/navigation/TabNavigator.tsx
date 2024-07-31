import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamsList, TabStackOptions} from '../types/Types';
import {TAB_STACK} from '../constants/constants';
import {COLORS} from '../constants/colors';
import {Text} from 'react-native';
import {FONT_FAMILY} from '../constants/fonts';
import {SocketProvider} from '../provider/SocketProvider';

const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator<RootStackParamsList>();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          height: 74,
          paddingTop: 14,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: COLORS.lightBlue,
      })}>
      {TAB_STACK.map((item, i: number) => {
        return (
          <Tab.Screen
            key={i}
            name={item?.screen as keyof RootStackParamsList}
            component={item.component}
            options={{
              ...(item.options as TabStackOptions),
              tabBarLabel: ({focused}) => (
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? COLORS.lightBlue : COLORS.fadedGrey,
                    fontFamily: FONT_FAMILY.semiBold,
                  }}>
                  {item.screen as keyof RootStackParamsList}
                </Text>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
