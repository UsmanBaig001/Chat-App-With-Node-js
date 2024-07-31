import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/fonts';

export const ForgetPassStyles = StyleSheet.create({
  parent_container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main_container: {
    justifyContent: 'center',
    marginBottom: 'auto',
    marginTop: 'auto',
    paddingBottom: 130,
  },
  heading_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 38,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputGrey,
    padding: 10,
  },
  btn: {
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 40,
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
  heading_text: {
    fontFamily: FONT_FAMILY.semiBold,
    color: COLORS.lightBlue,
    marginTop: 60,
    fontSize: 18,
  },
  paragraph: {
    color: COLORS.fadedGrey,
    marginTop: 19,
    marginBottom: 32,
    width: 320,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.light,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  label: {
    color: COLORS.lightBlue,
    height: 14,
    fontSize: 10,
    marginTop: 12,
    fontFamily: FONT_FAMILY.semiBold,
  },
});
