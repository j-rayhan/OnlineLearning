import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {styles} from '../screens/styles';

const IconLabel = ({
  contentContainerStyle,
  icon,
  iconStyle,
  label,
  labelStyle,
}) => {
  return (
    <View style={[styles.row, contentContainerStyle]}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{...styles.iconSize20, tintColor: COLORS.gray30, ...iconStyle}}
      />

      <Text
        style={{
          marginLeft: SIZES.base,
          color: COLORS.gray30,
          ...FONTS.body3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
