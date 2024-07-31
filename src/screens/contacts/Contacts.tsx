import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {ContactStyles} from './ContactStyles';
import LinearGradient from 'react-native-linear-gradient';
import {iconAddUser, iconSearch} from '../../assets/images/Images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import useContacts from './useContacts';
import ContactUser from '../../components/contactUser/ContactUser';
import {SettingStyles} from '../settings/settingsStyles';
import {NavigationProps} from '../../types/Types';
import {COLORS} from '../../constants/colors';
const Contacts = ({navigation, route}: NavigationProps) => {
  const {
    users,
    loading,
    handleUserPress,
    modalVisible,
    setModalVisible,
    handleAddChat,
  } = useContacts({navigation, route});

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          ToastAndroid.show('Modal has been closed.', ToastAndroid.SHORT);
          setModalVisible(!modalVisible);
        }}>
        <View style={ContactStyles.centeredView}>
          <View style={ContactStyles.modalView}>
            <Pressable
              style={ContactStyles.startChatBtn}
              onPress={handleAddChat}>
              {loading ? (
                <ActivityIndicator
                  style={ContactStyles.loader}
                  size="small"
                  color={COLORS.white}
                />
              ) : (
                <Text style={ContactStyles.modalText}>Start Chat</Text>
              )}
            </Pressable>
            <Pressable
              style={[ContactStyles.button, ContactStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={ContactStyles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <LinearGradient
        style={ContactStyles.mainContainer}
        colors={[COLORS.black, COLORS.lightPurple]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={ContactStyles.container}>
          <View style={ContactStyles.topbar}>
            <Pressable onPress={() => navigation.navigate('Search')}>
              <View style={ContactStyles.iconSearchContainer}>
                <Image source={iconSearch} style={ContactStyles.imageSearch} />
              </View>
            </Pressable>
            <Text style={ContactStyles.screenName}>Contacts</Text>

            <View style={ContactStyles.iconSearchContainer}>
              <Image source={iconAddUser} style={ContactStyles.profilePhoto} />
            </View>
          </View>
        </View>

        <View style={ContactStyles.main}>
          <View style={SettingStyles.nouch}></View>
          <SafeAreaView style={ContactStyles.textContainer}>
            <Text style={ContactStyles.heading}>My Contact</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {Object.entries(users).map(([letter, users]) => (
                <View key={letter}>
                  <Text style={ContactStyles.letter}>{letter}</Text>
                  {users.map((user, index) => (
                    <Pressable
                      onPress={() => handleUserPress(user)}
                      key={index}>
                      <ContactUser
                        key={index}
                        photoURL={user?.photoUrl}
                        displayName={user.displayName}
                        status={user.status}
                      />
                    </Pressable>
                  ))}
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </LinearGradient>
    </>
  );
};
export default Contacts;
