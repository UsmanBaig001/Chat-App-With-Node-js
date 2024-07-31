import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {MesssageStyles} from './MessageStyles';
import {
  NotificationBell,
  iconSearch,
  iconTrash,
} from '../../assets/images/Images';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native';
import {ChatRoom, NavigationProps, userDataType} from '../../types/Types';
import {SwipeListView} from 'react-native-swipe-list-view';
import useMessages from './useMessages';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';

export default function Messages({navigation}: NavigationProps) {
  const {userData, handleLogout, filteredData, uid, handleDelete, chatUsers} =
    useMessages();
  const renderItem2 = ({item}: {item: ChatRoom}) => {
    const id = item.senderUid === uid ? item.receiverUid : item.senderUid;
    const user: userDataType | undefined = chatUsers.find(
      (user: {uid: string}) => user.uid === id,
    );
    return (
      <>
        <Pressable
          onPress={() => {
            if (user) {
              navigation.navigate('Chat', {item, user});
            }
          }}>
          <View style={MesssageStyles.item}>
            <Image
              source={{
                uri: user?.photoUrl || 'https://via.placeholder.com/44x44',
              }}
              style={MesssageStyles.image}
            />
            <View style={MesssageStyles.textContainer}>
              <View style={MesssageStyles.timeContainer}>
                <Text style={MesssageStyles.name}>{user?.displayName}</Text>
                <Text style={MesssageStyles.timeAgo}>2 mins ago</Text>
              </View>
              <Text style={MesssageStyles.description}>{user?.status}</Text>
            </View>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <LinearGradient
      style={MesssageStyles.mainContainer}
      colors={[COLORS.black, COLORS.lightPurple]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={MesssageStyles.container}>
        <View style={MesssageStyles.topbar}>
          <Pressable onPress={() => navigation.navigate('Search')}>
            <View style={MesssageStyles.iconSearchContainer}>
              <Image source={iconSearch} style={MesssageStyles.imageSearch} />
            </View>
          </Pressable>
          <Text style={MesssageStyles.screenName}>Home</Text>

          <Pressable onPress={handleLogout}>
            <Image
              source={{
                uri: userData?.photoUrl || `https://via.placehold.com/44x44`,
              }}
              style={MesssageStyles.profilePhoto}
            />
          </Pressable>
        </View>
      </View>

      <View style={MesssageStyles.main}>
        <View style={MesssageStyles.nouch}></View>
        <SafeAreaView style={MesssageStyles.safeAreaContainer}>
          <SwipeListView
            data={filteredData}
            renderItem={renderItem2}
            renderHiddenItem={({item}) => (
              <View style={MesssageStyles.hiddenContainer}>
                <TouchableOpacity style={MesssageStyles.iconBellContainer}>
                  <Image
                    source={NotificationBell}
                    style={MesssageStyles.iconBell}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleDelete(item._id);
                  }}
                  style={MesssageStyles.iconDeleteContainer}>
                  <Image source={iconTrash} style={MesssageStyles.iconDelete} />
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={0}
            rightOpenValue={-104}
          />
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
}
