import * as React from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {styles} from '../screens/styles';

const ProfileRadioBtn = ({icon, label, isSelected, onPress}) => {
  return (
    <View style={[styles.row, {height: 80}]}>
      <View
        style={[
          styles.center,
          {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: COLORS.additionalColor11,
          },
        ]}>
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
        {label && <Text style={{...FONTS.h3}}>{label}</Text>}
      </View>
      {/* Arrow icon */}
      <TouchableOpacity
        style={[{width: 40, height: 40}, styles.center]}
        onPress={onPress}>
        <Animated.View
          style={{
            width: '100%',
            height: 5,
            borderRadius: 5,
            backgroundColor: COLORS.primary, //Animated
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            left: 0, // Animated
            width: 25,
            height: 25,
            borderRadius: 15,
            borderWidth: 5,
            borderColor: COLORS.primary3, // Animated
            backgroundColor: COLORS.white,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileRadioBtn;
