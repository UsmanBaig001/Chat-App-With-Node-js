import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';

export const ContactStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  loader: {},
  container: {
    paddingVertical: 27,
  },
  iconSearchContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.fadedGrey,
  },
  imageSearch: {
    height: 22,
    width: 22,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  profilePhoto: {
    width: 24,
    height: 24,
    borderRadius: 22,
  },
  alternatePhoto: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.black,
    opacity: 0.4,
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  screenName: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.regular,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.bold,
  },
  description: {
    fontSize: 16,
  },
  letter: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 20,
    color: COLORS.lightBlack,
  },
  heading: {
    fontSize: 16,
    paddingTop: 24,
    paddingBottom: 20,
    fontFamily: FONT_FAMILY.medium,
    color: COLORS.lightBlack,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  modalView: {
    backgroundColor: COLORS.thinBlue,
    borderRadius: 20,
    padding: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.lightBlack,
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    width: '50%',
    marginStart: 20,
  },
  buttonOpen: {
    backgroundColor: COLORS.lightPurple,
  },
  buttonClose: {
    backgroundColor: COLORS.lightRed,
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.semiBold,
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.semiBold,
    color: COLORS.white,
  },
  startChatBtn: {
    width: '50%',
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    backgroundColor: COLORS.lightPurple,
  },
});
