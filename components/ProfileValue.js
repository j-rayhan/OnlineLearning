import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {styles} from '../screens/styles';

const ProfileValue = ({icon, label, value, onPress}) => {
  const {appTheme} = useSelector(state => state);
  return (
    <TouchableOpacity style={[styles.row, {height: 80}]} onPress={onPress}>
      <View
        style={[
          styles.center,
          styles.radioBtnContainer,
          {backgroundColor: appTheme?.backgroundColor3},
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
        {label && (
          <Text style={{color: COLORS.gray30, ...FONTS.body3}}>{label}</Text>
        )}
        <Text style={{color: appTheme?.textColor, ...FONTS.h3}}>{value}</Text>
      </View>
      {/* Arrow icon */}
      <Image
        source={icons.right_arrow}
        style={{...styles.iconSize15, tintColor: appTheme?.tintColor}}
      />
    </TouchableOpacity>
  );
};

export default ProfileValue;
