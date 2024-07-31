import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';

export const SearchStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  textContainer1: {
    flex: 1,
  },
  textInput: {
    backgroundColor: COLORS.thinBlue,
    paddingStart: 46,
    borderRadius: 12,
    marginTop: 17,
  },
  searchContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 10,
    top: 30,
    left: 12,
  },
  searchHeading: {
    marginTop: 30,
    marginBottom: 3,
    color: COLORS.lightBlack,
    fontSize: 16,
    fontFamily: FONT_FAMILY.semiBold,
  },
  iconRemove: {
    alignSelf: 'flex-end',
    marginTop: -35,
    marginRight: 5,
    height: 24,
    width: 24,
  },
  parentContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
});
