import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {icoGoBackWhitelist} from '../../assets/images/Images';
import {NavigationProps} from '../../types/Types';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {UpdatePasswordStyles} from './UpdatePasswordStyles';
import useUpdatePasssword from './useUpdatePasssword';

const UpdatePassword = ({navigation, route}: NavigationProps) => {
  const {goBackCustom} = useUpdatePasssword({navigation, route});
  return (
    <ScrollView style={UpdatePasswordStyles.containerScroll}>
      <LinearGradient
        style={UpdatePasswordStyles.mainContainer}
        colors={['#000', '#43116A']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={UpdatePasswordStyles.container}>
          <View style={UpdatePasswordStyles.topbar}>
            <View>
              <Pressable onPress={goBackCustom}>
                <Image
                  source={icoGoBackWhitelist}
                  style={UpdatePasswordStyles.imageBack}
                />
              </Pressable>
            </View>
            <Text style={UpdatePasswordStyles.screenName}>Change Password</Text>
            <View style={UpdatePasswordStyles.alternatePhoto}></View>
          </View>
        </View>
        <View style={UpdatePasswordStyles.main}>
          <View style={UpdatePasswordStyles.nouch}></View>
          <View style={UpdatePasswordStyles.BioContainer}>
            <Text style={UpdatePasswordStyles.label}>Current Password</Text>
            <TextInput
              value={'passwordpassword'}
              style={UpdatePasswordStyles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              keyboardType="default"
            />
            <Text style={UpdatePasswordStyles.label}>New Password</Text>
            <TextInput
              value={'passwordpassword'}
              style={UpdatePasswordStyles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              keyboardType="default"
            />
            <Text style={UpdatePasswordStyles.label}>Confirm New Password</Text>
            <TextInput
              value={'passwordpassword'}
              style={UpdatePasswordStyles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              keyboardType="default"
            />
          </View>
          <View style={UpdatePasswordStyles.btnContainer}>
            <TouchableOpacity style={UpdatePasswordStyles.btn}>
              <Text style={UpdatePasswordStyles.text}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default UpdatePassword;
