import React from 'react';
import {View, Text, Pressable, Image, ImageBackground} from 'react-native';
import {ChatStyles} from './ChatStyles';
import {NavigationProps} from '../../types/Types';
import {
  iconAttach,
  iconCamera,
  iconSend,
  goBackCustomIcon,
  threeDotsIcon,
} from '../../assets/images/Images';
import {TextInput} from 'react-native-gesture-handler';
import useChat from './useChat';
import {ChatDisplay} from '../../components/chatDisplay/ChatDisplay';
import LinearGradient from 'react-native-linear-gradient';

export const Chat = ({navigation, route}: NavigationProps) => {
  const {
    handleChange,
    inputMessage,
    chatUser,
    goBackCustom,
    sendMessage,
    messageList,
  } = useChat({
    route,
    navigation,
  });
  return (
    <>
      <LinearGradient
        colors={['#000', '#43116A']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={ChatStyles.container}>
          <Pressable onPress={goBackCustom}>
            <Image source={goBackCustomIcon} style={ChatStyles.goBackIcon} />
          </Pressable>
          <View style={ChatStyles.imageContainer}>
            <Image
              style={ChatStyles.userImage}
              source={{
                uri: chatUser?.photoUrl || `https://via.placeholder.com/44x44`,
              }}
            />
            <View style={ChatStyles.active}></View>
          </View>
          <View style={ChatStyles.nameContainer}>
            <Text style={ChatStyles.displayName}>
              {chatUser?.displayName || 'Display name'}
            </Text>
            <Text style={ChatStyles.status}>Active Now</Text>
          </View>
          <Pressable style={ChatStyles.iconMenu}>
            <Image source={threeDotsIcon} style={ChatStyles.menuIcon} />
          </Pressable>
        </View>
      </LinearGradient>
      <View style={ChatStyles.mainContainer}>
        {messageList && chatUser ? (
          <ChatDisplay messageList={messageList} chatUser={chatUser} />
        ) : null}
      </View>
      <ImageBackground
        source={{
          uri: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png',
        }}
        style={{}}>
        <View style={ChatStyles.messageBar}>
          <View style={ChatStyles.messageBackground}>
            <Pressable>
              <Image source={iconAttach} />
            </Pressable>
            <TextInput
              style={ChatStyles.textInput}
              placeholder="Write a Message"
              placeholderTextColor={'#797C7B80'}
              onChangeText={handleChange}
              value={inputMessage}
            />

            <Pressable style={ChatStyles.copyContainer}>
              <Image style={ChatStyles.iconCopy} source={iconCamera} />
            </Pressable>
          </View>
          <Pressable style={ChatStyles.sendContainer} onPress={sendMessage}>
            <Image source={iconSend} style={ChatStyles.sendIcon} />
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

export default Chat;
