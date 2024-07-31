import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';
export const ChatDisplayStylesSender = StyleSheet.create({
  main: {
    backgroundColor: COLORS.lightBlue,
    borderRadius: 14,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  message: {
    fontSize: 14,
    color: 'white',
    fontFamily: FONT_FAMILY.regular,
  },
  createdAt: {
    marginTop: 4,
    color: COLORS.lightBlack,
    fontSize: 10,
    alignSelf: 'flex-end',
  },
});
export const ChatDisplayStylesReceiver = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 32,
    height: 36,
    borderRadius: 31,
  },
  displayName: {
    fontSize: 14,
    marginStart: 12,
    color: COLORS.lightBlack,
    fontFamily: FONT_FAMILY.regular,
  },
  messageContainerWrapper: {},
  messageContainer: {
    // marginTop: 12,
    backgroundColor: COLORS.chatBlue,
    borderRadius: 14,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
    // marginLeft: 8,
    marginRight: 22,
  },
  message: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONT_FAMILY.regular,
  },
  createdAt: {
    marginTop: 4,
    color: COLORS.lightBlack,
    fontSize: 10,
    alignSelf: 'flex-end',
    marginRight: 26,
  },
  dateStamp: {
    backgroundColor: COLORS.chatBlue,
    alignSelf: 'center',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 6,
    marginVertical: 25,
    color: COLORS.lightBlack,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
});
