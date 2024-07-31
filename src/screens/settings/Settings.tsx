import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  icoGoBackWhitelist,
  iconBell,
  iconHelp,
  iconUsers,
} from '../../assets/images/Images';
import {SettingStyles} from './settingsStyles';
import {NavigationProps} from '../../types/Types';
import useSettings from './useSettings';
import {COLORS} from '../../constants/colors';

const Settings = ({navigation, route}: NavigationProps) => {
  const {userData, goBackCustom} = useSettings({navigation, route});

  return (
    <LinearGradient
      style={SettingStyles.mainContainer}
      colors={[COLORS.black, COLORS.lightPurple]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={SettingStyles.container}>
        <View style={SettingStyles.topbar}>
          <View>
            <Pressable onPress={goBackCustom}>
              <Image
                source={icoGoBackWhitelist}
                style={SettingStyles.imageBack}
              />
            </Pressable>
          </View>

          <Text style={SettingStyles.screenName}>Settings</Text>
          <View style={SettingStyles.alternatePhoto}></View>
        </View>
      </View>

      <View style={SettingStyles.main}>
        <View style={SettingStyles.nouch}></View>

        <View style={SettingStyles.item}>
          <Image
            source={{
              uri:
                userData?.photoUrl ||
                `https://via.placeholder.com/60x60
`,
            }}
            style={SettingStyles.image}
          />
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <View style={SettingStyles.textContainer}>
              <Text style={SettingStyles.name}>{userData?.displayName}</Text>
              <Text style={SettingStyles.description}>{userData?.status}</Text>
            </View>
          </Pressable>
        </View>
        <View style={SettingStyles.hr}></View>

        <View style={SettingStyles.notification}>
          <View style={SettingStyles.iconContainer}>
            <Image source={iconBell} />
          </View>
          <View style={SettingStyles.settingOptions}>
            <Text style={SettingStyles.optionsHeading}>Notifications</Text>
            <Text style={SettingStyles.optionsDescription}>
              Messages, group and others
            </Text>
          </View>
        </View>
        <View style={SettingStyles.notification}>
          <View style={SettingStyles.iconContainer}>
            <Image source={iconHelp} />
          </View>
          <View style={SettingStyles.settingOptions}>
            <Text style={SettingStyles.optionsHeading}>Help</Text>
            <Text style={SettingStyles.optionsDescription}>
              Help center, contact us, privacy policy
            </Text>
          </View>
        </View>
        <View style={SettingStyles.notification}>
          <View style={SettingStyles.iconContainer}>
            <Image source={iconUsers} />
          </View>
          <Pressable onPress={() => navigation.navigate('UpdatePassword')}>
            <View style={SettingStyles.settingOptions}>
              <Text style={SettingStyles.optionsHeading}>Change Password</Text>
              <Text style={SettingStyles.optionsDescription}>
                Change Account Password
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={SettingStyles.notification}>
          <View style={SettingStyles.iconContainer}>
            <Image source={iconUsers} />
          </View>
          <View style={SettingStyles.settingOptions}>
            <Text style={SettingStyles.optionInvite}>Invite a friend</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Settings;
