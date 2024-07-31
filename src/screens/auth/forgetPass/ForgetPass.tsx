import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ForgetPassStyles} from './ForgetPassStyles';
import useForgetPass from './useForgetPass';
import {goBack} from '../../../assets/images/Images';
import {LoginStyles} from '../login/LoginStyles';
import {NavigationProps} from '../../../types/Types';
import CustomTextInput from '../../../components/inputField/inputField';
import CustomButton from '../../../components/button/Button';
import {COLORS} from '../../../constants/colors';

const ForgetPass = ({navigation, route}: NavigationProps) => {
  const {email, handleEmail, goBackCustom, handleForgotPassword} =
    useForgetPass({navigation, route});
  return (
    <View style={ForgetPassStyles.parent_container}>
      <Pressable onPress={goBackCustom}>
        <Image style={LoginStyles.img} source={goBack} />
      </Pressable>
      <ScrollView
        contentContainerStyle={ForgetPassStyles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={ForgetPassStyles.main_container}>
          <View style={ForgetPassStyles.heading_container}>
            <Text style={ForgetPassStyles.heading_text}>Forget Password</Text>

            <Text style={ForgetPassStyles.paragraph}>
              Forgot your password? Don’t worry, we’ll send you a magic link
              right at your inbox!
            </Text>
          </View>

          <Text style={ForgetPassStyles.label}>Your email</Text>
          <CustomTextInput
            value={email}
            styles={ForgetPassStyles.input}
            keyboardType="email-address"
            onChangeText={handleEmail}
            placeholder=""
            secureTextEntry={false}
          />
        </View>
        <CustomButton
          onPress={handleForgotPassword}
          buttonText="Forget Password"
          colors={[COLORS.black, COLORS.lightPurple]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          buttonStyle={ForgetPassStyles.btn}
          textStyle={LoginStyles.text}
          touchStyle={LoginStyles.touch}
        />
      </ScrollView>
    </View>
  );
};

export default ForgetPass;
