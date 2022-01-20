import * as React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import {FONTS, COLORS, SIZES, iconSize} from '../constants';
import {styles} from '../screens/styles';

const IconLabelBtn = ({
  containerStyle,
  icon,
  label,
  labelStyle,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.row,
        styles.center,
        {
          ...containerStyle,
        },
      ]}
      onPress={onPress}>
      <Image
        source={icon}
        style={{
          ...iconSize(20),
          ...iconStyle,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconLabelBtn;
