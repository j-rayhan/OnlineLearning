import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {styles} from '../screens/styles';

const ProfileValue = ({icon, label, value, onPress}) => {
  return (
    <TouchableOpacity style={[styles.row, {height: 80}]} onPress={onPress}>
      <View style={[styles.center, styles.radioBtnContainer]}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            ...styles.iconSize25,
            tintColor: COLORS.primary,
          }}
        />
      </View>
      {/* label and value */}
      <View style={[styles.container, {marginLeft: SIZES.radius}]}>
        {label && (
          <Text style={{color: COLORS.gray30, ...FONTS.body3}}>{label}</Text>
        )}
        <Text style={{...FONTS.h3}}>{value}</Text>
      </View>
      {/* Arrow icon */}
      <Image source={icons.right_arrow} style={styles.iconSize15} />
    </TouchableOpacity>
  );
};

export default ProfileValue;
