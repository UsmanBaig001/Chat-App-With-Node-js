import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/fonts';

export const AuthScreenStyles = StyleSheet.create({
  heading: {
    fontSize: 68,
    color: COLORS.white,
    paddingStart: 26,
    fontFamily: FONT_FAMILY.regular,
  },
  mainContainer: {
    color: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 56,
    paddingTop: 41,
  },
  text: {
    paddingStart: 26,
    marginTop: 39,
    color: COLORS.thinGrey,
    lineHeight: 26,
    fontFamily: FONT_FAMILY.regular,
  },
  or_text: {
    color: COLORS.white,
    marginHorizontal: 12,
    fontFamily: FONT_FAMILY.extraBold,
  },
  signup_text: {
    color: COLORS.white,
    alignSelf: 'center',
    marginVertical: 11,
    fontFamily: FONT_FAMILY.regular,
  },
  img: {
    width: 32,
    height: 32,
    alignSelf: 'center',
  },
  imgContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    marginTop: 44,
    backgroundColor: COLORS.transparentLight,
    borderRadius: 45,
  },

  border: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
    opacity: 0.2,
    width: 132,
    marginBottom: 14,
  },

  or_container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touch: {
    backgroundColor: COLORS.thinGrey,
    marginTop: 30,
    width: 320,
    alignSelf: 'center',
    borderRadius: 18,
  },
  bottom_container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  account_text: {
    color: COLORS.white,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.regular,
  },
  login_text: {
    color: COLORS.white,
    marginStart: 4,
    fontFamily: FONT_FAMILY.semiBold,
    alignSelf: 'center',
  },
});
