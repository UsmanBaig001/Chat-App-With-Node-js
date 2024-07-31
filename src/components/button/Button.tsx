import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CustomButtonProps} from '../../types/Types';

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  buttonText,
  colors,
  start,
  end,
  buttonStyle,
  touchStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={touchStyle} onPress={onPress}>
      <LinearGradient
        style={buttonStyle}
        colors={colors}
        start={start}
        end={end}>
        <Text style={textStyle}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
