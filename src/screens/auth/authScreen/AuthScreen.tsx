import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProps} from '../../../types/Types';
import {AuthScreenStyles} from './AuthScreenStyles';
import {iconGoogle} from '../../../assets/images/Images';
import useAuthScreen from './useAuthScreen';
import {COLORS} from '../../../constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const AuthScreen = ({navigation, route}: NavigationProps) => {
  const {handleGmailLogin} = useAuthScreen({navigation, route});
  return (
    <LinearGradient
      style={AuthScreenStyles.mainContainer}
      colors={[COLORS.black, COLORS.lightPurple]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <SafeAreaView>
        <Text style={AuthScreenStyles.heading}>
          Connect friends easily & quickly
        </Text>
        <Text style={AuthScreenStyles.text}>
          Our chat app is the perfect way to stay connected with friends and
          family.
        </Text>
        <Pressable onPress={handleGmailLogin}>
          <View style={AuthScreenStyles.imgContainer}>
            <Image style={AuthScreenStyles.img} source={iconGoogle} />
          </View>
        </Pressable>

        <View style={AuthScreenStyles.or_container}>
          <View style={AuthScreenStyles.border}></View>
          <Text style={AuthScreenStyles.or_text}>OR</Text>
          <View style={AuthScreenStyles.border}></View>
        </View>

        <TouchableOpacity
          style={AuthScreenStyles.touch}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={AuthScreenStyles.signup_text}>Sign up with mail</Text>
        </TouchableOpacity>
        <View style={AuthScreenStyles.bottom_container}>
          <Text style={AuthScreenStyles.account_text}>Existing accouct?</Text>
          <Text
            style={AuthScreenStyles.login_text}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Log in
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AuthScreen;
