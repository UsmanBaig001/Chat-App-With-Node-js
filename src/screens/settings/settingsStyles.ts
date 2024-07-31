import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';

export const SettingStyles = StyleSheet.create({
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
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 27,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.brownCustom,
    marginBottom: 18,
  },
  screenName: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.regular,
    paddingStart: 24,
  },

  item: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    marginBottom: 50,
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.thinWhite,
    borderRadius: 30,
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
  timeAgo: {
    fontSize: 14,
    color: COLORS.thinWhite,
  },
  description: {
    fontSize: 16,
  },
  notification: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  iconContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.skyBlue,
    opacity: 0.7,
  },
  settingOptions: {
    paddingStart: 12,
  },
  optionsHeading: {
    color: COLORS.lightBlack,
    fontFamily: FONT_FAMILY.regular,
    fontSize: 16,
  },
  optionsDescription: {
    color: COLORS.tanBlue,
    fontFamily: FONT_FAMILY.medium,
    fontSize: 12,
  },
  optionInvite: {
    color: COLORS.lightBlack,
    fontFamily: FONT_FAMILY.regular,
    fontSize: 16,
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 11,
  },
});
