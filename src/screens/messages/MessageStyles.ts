import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';

export const MesssageStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingVertical: 27,
  },
  iconSearchContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#797C7B',
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
    width: 44,
    height: 44,
    borderRadius: 30,
  },
  alternatePhoto: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'black',
    opacity: 0.4,
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 17,
    paddingHorizontal: 24,
  },
  nouch: {
    width: 30,
    height: 3,
    backgroundColor: COLORS.offWhite,
    alignSelf: 'center',
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
    backgroundColor: COLORS.white,
  },
  image: {
    width: 52,
    height: 52,
    backgroundColor: COLORS.fadedGrey,
    borderRadius: 26,
  },
  textContainer: {
    flex: 1,
    paddingStart: 12,
  },
  safeAreaContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.semiBold,
    color: COLORS.lightBlack,
  },
  timeAgo: {
    fontSize: 14,
    color: COLORS.fadedGrey,
    marginStart: 'auto',
    paddingBottom: 6,
  },
  description: {
    fontSize: 16,
    color: COLORS.fadedGrey,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBellContainer: {
    backgroundColor: COLORS.lightBlack,
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconBell: {
    height: 22,
    width: 22,
    padding: 7,
  },
  iconDeleteContainer: {
    backgroundColor: COLORS.lightRed,
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDelete: {},
  hiddenContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
});
