import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';

export const UpdatePasswordStyles = StyleSheet.create({
  nouch: {
    width: 30,
    height: 3,
    backgroundColor: '#E6E6E6',
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
  },

  item: {
    alignItems: 'center',
    paddingTop: 48,
    marginBottom: 48,
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: '#666',
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
    paddingTop: 66,
    paddingHorizontal: 24,
  },
  btn: {
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.lightBlue,
  },
  text: {
    color: COLORS.white,
    marginHorizontal: 'auto',
    paddingVertical: 10,
    fontFamily: FONT_FAMILY.semiBold,
  },
  btnContainer: {
    marginTop: 207,
    marginBottom: 24,
    marginHorizontal: 24,
  },
});
