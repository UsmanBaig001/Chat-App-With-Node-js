import React from 'react';
import {View, Text, Image} from 'react-native';
import {ContactUserStyles} from './ContactUserStyles';
import {UserProps} from '../../types/Types';

const ContactUser: React.FC<UserProps> = ({photoURL, displayName, status}) => {
  return (
    <View style={ContactUserStyles.container}>
      <Image
        source={{uri: photoURL || `https://via.placeholder.com/50x50`}}
        style={ContactUserStyles.photo}
      />
      <View style={ContactUserStyles.textContainer}>
        <Text style={ContactUserStyles.username}>{displayName}</Text>
        <Text style={ContactUserStyles.status}>{status}</Text>
      </View>
    </View>
  );
};

export default ContactUser;
