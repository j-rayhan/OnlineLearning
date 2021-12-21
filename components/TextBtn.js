import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {COLORS, FONTS} from '../constants';
import {styles} from '../screens/styles';

const TextBtn = ({
  contentContainerStyle,
  disable,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={[
        styles.center,
        {backgroundColor: COLORS.primary, ...contentContainerStyle},
      ]}>
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextBtn;
