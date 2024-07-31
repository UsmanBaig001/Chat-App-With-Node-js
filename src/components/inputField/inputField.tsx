import React from 'react';
import {TextInput} from 'react-native';
import {TextInputProps} from '../../types/Types';

const CustomTextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  styles,
}) => {
  return (
    <TextInput
      style={styles}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

export default CustomTextInput;
