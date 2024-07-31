import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';

export const ChatStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 6,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: COLORS.skyBlue,
  },
  userImage: {
    height: 44,
    width: 44,
    borderRadius: 31,
    marginStart: 12,
  },
  nameContainer: {
    paddingStart: 12,
    paddingTop: 6,
  },
  status: {
    color: COLORS.activeGreen,
    fontSize: 12,
    fontFamily: FONT_FAMILY.regular,
  },
  displayName: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.medium,
    color: COLORS.white,
    fontWeight: '500',
  },

  mainContainer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGrey,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  iconCamera: {
    marginStart: 8,
  },
  textInput: {
    marginStart: 11,
    paddingStart: 12,
    flex: 1,
    height: 40,
    backgroundColor: COLORS.thinBlue,
    borderTopLeftRadius: 12,
    color: COLORS.black,
    borderBottomLeftRadius: 12,
  },

  sendIcon: {
    height: 28,
    width: 28,
    marginStart: 2,
  },
  active: {
    backgroundColor: COLORS.activeGreen,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginStart: -12,
    marginBottom: 0,
    marginTop: 'auto',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  messageBar: {
    paddingTop: 4,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  iconCopy: {},
  copyContainer: {
    backgroundColor: COLORS.thinBlue,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    width: 44,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendContainer: {
    backgroundColor: COLORS.white,
    width: 48,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginRight: 4,
  },
  messageBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 40,
    paddingVertical: 6,
    marginHorizontal: 6,
    marginBottom: 8,
    flex: 1,
  },
  goBackIcon: {
    width: 22,
    height: 24,
    marginBottom: 'auto',
  },
  iconMenu: {
    marginLeft: 'auto',
  },
  menuIcon: {
    height: 24,
    width: 24,
  },
});
