import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/fonts';

export const SignupStyles = StyleSheet.create({
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
    color: COLORS.black,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputGrey,
    paddingStart: 10,
  },
  btn: {
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 12,
    fontFamily: FONT_FAMILY.regular,
  },
  text: {
    color: COLORS.white,
    paddingVertical: 10,
    fontFamily: FONT_FAMILY.bold,
  },
  img: {
    marginTop: 17,
    width: 18,
    height: 13,
  },
  heading: {
    color: COLORS.lightBlue,
    marginTop: 60,
    fontSize: 18,
    fontFamily: FONT_FAMILY.bold,
  },
  paragraph: {
    color: COLORS.fadedGrey,
    marginTop: 19,
    marginBottom: 20,
    width: 293,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.regular,
  },
  heading_container: {
    alignItems: 'center',
  },
  scrollContent: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  label: {
    color: COLORS.lightBlue,
    height: 14,
    fontSize: 10,
    marginTop: 40,
    fontFamily: FONT_FAMILY.semiBold,
  },
  touch: {
    marginBottom: 40,
    fontFamily: FONT_FAMILY.regular,
  },
});
