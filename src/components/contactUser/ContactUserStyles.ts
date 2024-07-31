import {StyleSheet} from 'react-native';

export const ContactUserStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000E08',
  },
  status: {
    fontSize: 14,
    color: '#797C7B80',
  },
});
