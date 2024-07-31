import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../../types/Types';
import {LoginStyles} from './LoginStyles';
import {useLogin} from './useLogin';
import {goBack, iconGoogle} from '../../../assets/images/Images';
import CustomTextInput from '../../../components/inputField/inputField';
import CustomButton from '../../../components/button/Button';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../constants/colors';

const Login = ({navigation, route}: NavigationProps) => {
  const {
    email,
    password,
    loading,
    handleEmail,
    handlePassword,
    handleLogin,
    handleGmailLogin,
    goBackCustom,
  } = useLogin({navigation, route});
  return (
    <View style={LoginStyles.parent_container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={LoginStyles.scrollContent}
        style={LoginStyles.scroll_container}>
        <View>
          <Pressable onPress={goBackCustom}>
            <Image style={LoginStyles.back_img} source={goBack} />
          </Pressable>
          <View style={LoginStyles.heading_container}>
            <Text style={LoginStyles.heading}>Log in to Chatbox</Text>

            <Text style={LoginStyles.paragraph}>
              Welcome back! Sign in using your social account or email to
              continue us
            </Text>
          </View>

          <TouchableOpacity onPress={handleGmailLogin}>
            <View style={LoginStyles.imgContainer}>
              <Image style={LoginStyles.google_img} source={iconGoogle} />
            </View>
          </TouchableOpacity>

          <View style={LoginStyles.or_container}>
            <View style={LoginStyles.border}></View>
            <Text style={LoginStyles.or_text}>OR</Text>
            <View style={LoginStyles.border}></View>
          </View>
          <Text style={LoginStyles.label}>Your email</Text>
          <CustomTextInput
            value={email}
            styles={LoginStyles.input}
            keyboardType="email-address"
            onChangeText={handleEmail}
            placeholder=""
            secureTextEntry={false}
          />
          <Text style={LoginStyles.label}>Password</Text>
          <CustomTextInput
            value={password}
            styles={LoginStyles.input_pass}
            onChangeText={handlePassword}
            secureTextEntry={true}
            placeholder=""
            keyboardType="default"
          />
        </View>
        <View>
          {loading ? (
            <TouchableOpacity style={LoginStyles.touch}>
              <LinearGradient
                style={LoginStyles.btn}
                colors={[COLORS.black, COLORS.lightPurple]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <ActivityIndicator size={'large'} style={LoginStyles.loader} />
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <CustomButton
              onPress={handleLogin}
              buttonText="Log in"
              colors={[COLORS.black, COLORS.lightPurple]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              buttonStyle={LoginStyles.btn}
              textStyle={LoginStyles.text}
              touchStyle={LoginStyles.touch}
            />
          )}
          <TouchableOpacity>
            <Text
              style={LoginStyles.forget_text}
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
