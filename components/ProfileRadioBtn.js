import * as React from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {styles} from '../screens/styles';

const ProfileRadioBtn = ({icon, label, isSelected, onPress}) => {
  const radioAnimated = React.useRef(new Animated.Value(0)).current;
  const circleColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.gray20, COLORS.primary],
  });
  const lineColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.additionalColor4, COLORS.additionalColor13],
  });
  React.useEffect(() => {
    Animated.timing(radioAnimated, {
      toValue: isSelected ? 17 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isSelected, radioAnimated]);
  return (
    <View style={[styles.row, {height: 80}]}>
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
            backgroundColor: lineColorAnimated, //Animated
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            left: radioAnimated, // Animated
            width: 25,
            height: 25,
            borderRadius: 15,
            borderWidth: 5,
            borderColor: circleColorAnimated, // Animated
            backgroundColor: COLORS.white,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileRadioBtn;
