import React, {useEffect, useRef} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ChatMessageList, userDataType} from '../../types/Types';
import auth from '@react-native-firebase/auth';
import {
  ChatDisplayStylesReceiver,
  ChatDisplayStylesSender,
} from './ChatDisplayStyles';

export const ChatDisplay = ({
  messageList,
  chatUser,
}: {
  messageList: ChatMessageList;
  chatUser: userDataType;
}) => {
  const flatListRef = useRef<FlatList>(null);
  useEffect(() => {
    flatListRef.current?.scrollToEnd({animated: true});
  }, [messageList]);
  const currentUser = auth()?.currentUser;
  return (
    <ImageBackground
      source={{
        uri: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png',
      }}
      style={{width: '100%', height: '100%'}}>
      <View style={{marginTop: 'auto'}}>
        <FlatList
          // ref={flatListRef}
          data={messageList}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            const showDateStamp =
              (index === 0 && item?.dateStamp) ||
              (index > 0 &&
                item?.dateStamp !== messageList[index - 1].dateStamp);

            const date = new Date(item?.dateStamp).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const currentDate = new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const yesterday = new Date(
              new Date().getTime() - 24 * 60 * 60 * 1000,
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const dateStamp =
              date === currentDate
                ? 'Today'
                : date === yesterday
                ? 'Yesterday'
                : date;

            const time = new Date(item?.createdAt).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            });

            return (
              <>
                {item?.dateStamp === 'Sending Messages'
                  ? ''
                  : showDateStamp && (
                      <Text style={ChatDisplayStylesReceiver?.dateStamp}>
                        {dateStamp}
                      </Text>
                    )}
                <View
                  style={{
                    alignItems:
                      item?.sendBy === currentUser?.uid
                        ? 'flex-end'
                        : 'flex-start',
                    marginVertical: 15,
                  }}>
                  {item?.sendBy !== currentUser?.uid && (
                    <View style={ChatDisplayStylesReceiver.main}>
                      {/* <Image
                      style={ChatDisplayStylesReceiver.profileImage}
                      source={{
                        uri:
                          chatUser?.photoUrl ||
                          'https://via.placeholder.com/120x120',
                      }}
                    /> */}
                      <View
                        style={
                          ChatDisplayStylesReceiver.messageContainerWrapper
                        }>
                        {/* <Text style={ChatDisplayStylesReceiver.displayName}>
                        {chatUser?.displayName}
                      </Text> */}
                        <View
                          style={ChatDisplayStylesReceiver.messageContainer}>
                          <Text style={ChatDisplayStylesReceiver.message}>
                            {item?.message}
                          </Text>
                        </View>
                        <Text style={ChatDisplayStylesReceiver.createdAt}>
                          {time}
                        </Text>
                      </View>
                    </View>
                  )}

                  {item?.sendBy === currentUser?.uid && (
                    <View style={ChatDisplayStylesSender.main}>
                      <Text style={ChatDisplayStylesSender.message}>
                        {item?.message}
                      </Text>
                    </View>
                  )}

                  {item?.sendBy === currentUser?.uid && (
                    <Text style={ChatDisplayStylesSender.createdAt}>
                      {item?.dateStamp === 'Sending Messages'
                        ? 'Pending'
                        : time}
                    </Text>
                  )}
                </View>
              </>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingHorizontal: 12, paddingBottom: 16}}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({animated: false})
          }
        />
      </View>
    </ImageBackground>
  );
};
