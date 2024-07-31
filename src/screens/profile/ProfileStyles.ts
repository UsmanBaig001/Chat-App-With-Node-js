import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';

export const ProfileStyles = StyleSheet.create({
  nouch: {
    width: 30,
    height: 3,
    backgroundColor: COLORS.offWhite,
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingTop: 19,
    paddingBottom: 52,
  },
  imageBack: {
    height: 24,
    width: 24,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  alternatePhoto: {
    width: 44,
    height: 44,
  },
  containerScroll: {
    backgroundColor: COLORS.white,
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 27,
  },
  screenName: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.regular,
    paddingStart: 24,
    letterSpacing: 1,
  },

  item: {
    alignItems: 'center',
    paddingTop: 48,
    marginBottom: 48,
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.thinWhite,
    borderRadius: 60,
  },
  textContainer: {
    flex: 1,
    paddingStart: 12,
  },
  textContainer1: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.bold,
    color: COLORS.lightBlack,
  },
  editIcon: {
    position: 'absolute',
    left: 91,
    top: 96,
  },
  label: {
    color: COLORS.lightBlue,
    height: 18,
    fontSize: 14,
    fontFamily: FONT_FAMILY.semiBold,
  },
  input: {
    fontFamily: FONT_FAMILY.regular,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputGrey,
    paddingLeft: 5,
    marginBottom: 30,
  },
  input_pass: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputGrey,
    paddingLeft: 5,
  },
  BioContainer: {
    paddingHorizontal: 24,
  },
  btn: {
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.lightBlue,
    width: 327,
  },
  text: {
    color: COLORS.white,
    marginHorizontal: 'auto',
    paddingVertical: 10,
    fontFamily: FONT_FAMILY.semiBold,
  },
  loader: {
    color: COLORS.white,
    marginHorizontal: 'auto',
    paddingVertical: 8,
    fontFamily: FONT_FAMILY.semiBold,
  },
  btnContainer: {
    marginTop: 57,
    alignItems: 'center',
  },
});
