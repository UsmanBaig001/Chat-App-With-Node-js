import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import {SignupStyles} from './SignupStyles';
import useSignup from './useSignup';
import {LoginStyles} from '../login/LoginStyles';
import {NavigationProps} from '../../../types/Types';
import {goBack} from '../../../assets/images/Images';
import CustomTextInput from '../../../components/inputField/inputField';
import CustomButton from '../../../components/button/Button';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../constants/colors';

const Signup = ({navigation, route}: NavigationProps) => {
  const {
    handleEmail,
    handlePassword,
    handleName,
    handleConfirmPassword,
    handleSignup,
    password,
    email,
    goBackCustom,
    displayName,
    confirmPassword,
    loading,
  } = useSignup({navigation, route});
  return (
    <View style={SignupStyles.parent_container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={SignupStyles.scrollContent}
        style={SignupStyles.scroll_container}>
        <View>
          <Pressable onPress={goBackCustom}>
            <Image style={LoginStyles.back_img} source={goBack} />
          </Pressable>
          <View style={SignupStyles.heading_container}>
            <Text style={SignupStyles.heading}>Sign up with Email</Text>

            <Text style={SignupStyles.paragraph}>
              Get chatting with friends and family today by signing up for our
              chat app!
            </Text>
          </View>

          <Text style={SignupStyles.label}>Your name</Text>
          <CustomTextInput
            value={displayName}
            styles={SignupStyles.input}
            keyboardType="name-phone-pad"
            onChangeText={handleName}
            placeholder=""
            secureTextEntry={false}
          />
          <Text style={SignupStyles.label}>Your email</Text>
          <CustomTextInput
            value={email}
            styles={SignupStyles.input}
            keyboardType="email-address"
            onChangeText={handleEmail}
            placeholder=""
            secureTextEntry={false}
          />
          <Text style={SignupStyles.label}>Password</Text>
          <CustomTextInput
            value={password}
            styles={SignupStyles.input_pass}
            onChangeText={handlePassword}
            secureTextEntry={true}
            placeholder=""
            keyboardType="default"
          />
          <Text style={SignupStyles.label}>Confirm Password</Text>
          <CustomTextInput
            value={confirmPassword}
            styles={SignupStyles.input_pass}
            onChangeText={handleConfirmPassword}
            secureTextEntry={true}
            keyboardType="default"
            placeholder=""
          />
        </View>
        <View>
          {loading ? (
            <View style={SignupStyles.touch}>
              <LinearGradient
                style={LoginStyles.btn}
                colors={[COLORS.black, COLORS.lightPurple]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <ActivityIndicator size={'large'} style={LoginStyles.loader} />
              </LinearGradient>
            </View>
          ) : (
            <CustomButton
              onPress={handleSignup}
              buttonText="Create an account"
              colors={[COLORS.black, COLORS.lightPurple]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              buttonStyle={LoginStyles.btn}
              textStyle={LoginStyles.text}
              touchStyle={SignupStyles.touch}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
