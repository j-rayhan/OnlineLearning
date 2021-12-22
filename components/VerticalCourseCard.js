import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IconLabel} from '.';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {styles} from '../screens/styles';

const VCCard = ({containerStyle, course}) => {
  return (
    <TouchableOpacity style={{width: 270, ...containerStyle}}>
      {/* Image section */}
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />
      {/* Detail section */}
      <View style={styles.row}>
        <View
          style={{
            height: 45,
            width: 45,
            borderRadius: SIZES.padding,
            backgroundColor: COLORS.primary,
            ...styles.center,
          }}>
          <Image
            source={icons.play}
            resizeMode="contain"
            style={styles.iconSize20}
          />
        </View>
        <View style={{flexShrink: 1, paddingHorizontal: SIZES.radius}}>
          <Text style={{flex: 1, ...FONTS.h3, fontSize: 18}}>
            {course.title}
          </Text>
          <IconLabel
            icon={icons.time}
            label={course.duration}
            contentContainerStyle={{marginTop: SIZES.base}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default VCCard;
