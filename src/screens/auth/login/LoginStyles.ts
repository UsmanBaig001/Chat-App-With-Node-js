import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/fonts';

export const LoginStyles = StyleSheet.create({
  parent_container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scroll_container: {
    flex: 1,
  },
  input: {
    fontFamily: FONT_FAMILY.regular,
    height: 42,
    color: COLORS.black,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputGrey,
    paddingStart: 10,
  },
  input_pass: {
    fontFamily: FONT_FAMILY.regular,
    height: 42,
    borderBottomWidth: 1,
    color: COLORS.black,
    borderBottomColor: COLORS.inputGrey,
    paddingStart: 10,
  },
  btn: {
    // marginBottom: 40,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    color: COLORS.white,
    paddingVertical: 10,
    fontFamily: FONT_FAMILY.bold,
  },
  back_img: {
    marginTop: 25,
    width: 18,
    height: 13,
  },
  heading: {
    fontFamily: FONT_FAMILY.semiBold,
    color: COLORS.lightBlue,
    marginTop: 60,
    fontSize: 18,
  },
  paragraph: {
    color: COLORS.fadedGrey,
    marginTop: 19,
    marginBottom: 32,
    width: 293,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.light,
  },
  heading_container: {
    alignItems: 'center',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputGrey,
    width: 132,
    marginBottom: 14,
  },
  or_container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  or_text: {
    color: COLORS.fadedGrey,
    marginHorizontal: 12,
    fontFamily: FONT_FAMILY.extraBold,
  },
  imgContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 45,
  },
  google_img: {
    width: 32,
    height: 32,
    alignSelf: 'center',
  },
  loader: {
    paddingVertical: 5,
  },
  touch: {},
  forget_text: {
    color: COLORS.lightBlue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.semiBold,
    marginTop: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  container_4: {
    flex: 1,
  },
  scrollContent: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  label: {
    color: COLORS.lightBlue,
    height: 14,
    fontSize: 10,
    marginTop: 12,
    fontFamily: FONT_FAMILY.semiBold,
  },
});
