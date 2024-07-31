import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {icoGoBackWhitelist, iconEdit} from '../../assets/images/Images';
import {ProfileStyles} from './ProfileStyles';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {NavigationProps} from '../../types/Types';
import useProfile from './useProfile';
import {COLORS} from '../../constants/colors';

const Profile = ({navigation, route}: NavigationProps) => {
  const {
    status,
    email,
    name,
    imageUri,
    loading,
    userData,
    goBackCustom,
    handleEmail,
    handleName,
    handleStatus,
    handleUpdateProfile,
    handleImage,
  } = useProfile({
    navigation,
    route,
  });
  return (
    <ScrollView style={ProfileStyles.containerScroll}>
      <LinearGradient
        style={ProfileStyles.mainContainer}
        colors={[COLORS.black, COLORS.lightPurple]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={ProfileStyles.container}>
          <View style={ProfileStyles.topbar}>
            <View>
              <Pressable onPress={goBackCustom}>
                <Image
                  source={icoGoBackWhitelist}
                  style={ProfileStyles.imageBack}
                />
              </Pressable>
            </View>

            <Text style={ProfileStyles.screenName}>Profile</Text>
            <View style={ProfileStyles.alternatePhoto}></View>
          </View>
        </View>

        <View style={ProfileStyles.main}>
          <View style={ProfileStyles.nouch}></View>

          <View style={ProfileStyles.item}>
            <Pressable onPress={handleImage}>
              {!imageUri ? (
                <Image
                  source={{
                    uri:
                      userData?.photoUrl ||
                      `https://via.placeholder.com/120x120`,
                  }}
                  style={ProfileStyles.image}
                />
              ) : (
                <Image
                  source={{
                    uri: imageUri,
                  }}
                  style={ProfileStyles.image}
                />
              )}
              <View style={ProfileStyles.editIcon}>
                <Image source={iconEdit} />
              </View>
            </Pressable>
          </View>

          <View style={ProfileStyles.BioContainer}>
            <Text style={ProfileStyles.label}>Your name</Text>
            <TextInput
              value={name ?? ''}
              style={ProfileStyles.input}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={handleName}
            />
            <Text style={ProfileStyles.label}>Your email</Text>
            <TextInput
              value={email ?? ''}
              style={ProfileStyles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={handleEmail}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={ProfileStyles.label}>Your status</Text>
            <TextInput
              value={status ?? ''}
              style={ProfileStyles.input}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={handleStatus}
            />
          </View>
          <View style={ProfileStyles.btnContainer}>
            <TouchableOpacity
              style={ProfileStyles.btn}
              onPress={handleUpdateProfile}>
              {loading ? (
                <ActivityIndicator
                  style={ProfileStyles.loader}
                  size="large"
                  color={COLORS.white}
                />
              ) : (
                <Text style={ProfileStyles.text}>Update Profile</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Profile;
