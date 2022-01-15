import * as React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconLabel} from '.';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {styles} from '../screens/styles';

const HorizontalCourseCard = ({containerStyle, course, onPress}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', ...containerStyle}}
      onPress={onPress}>
      {/* Image section */}
      <ImageBackground
        source={course.thumbnail}
        resizeMode="cover"
        style={styles.imageBackgroundContainer}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        <View style={[styles.IBCImage, styles.center]}>
          <Image
            source={icons.favourite}
            resizeMode="contain"
            style={{
              ...styles.iconSize20,
              tintColor: course.is_favourite
                ? COLORS.secondary
                : COLORS.additionalColor4,
            }}
          />
        </View>
      </ImageBackground>
      {/* Details */}
      <View style={{...styles.container, marginLeft: SIZES.base}}>
        <Text
          style={{
            ...FONTS.h3,
            fontSize: SIZES.font + 4,
          }}>
          {course?.title}
        </Text>
        {/* Instructor Duration */}
        <View style={{...styles.row, marginTop: SIZES.base}}>
          <Text style={{...FONTS.body4}}>By {course?.instructor}</Text>
          <IconLabel
            icon={icons.time}
            label={course.duration}
            contentContainerStyle={{
              marginLeft: SIZES.base,
            }}
            labelStyle={{...FONTS.body4}}
            iconStyle={styles.iconSize15}
          />
        </View>
        {/* Price Rating */}
        <View style={{...styles.row, marginTop: SIZES.base}}>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>
            {course.price.toFixed(2)}
          </Text>
          <IconLabel
            icon={icons.star}
            label={course.ratings}
            contentContainerStyle={{
              marginLeft: SIZES.base,
            }}
            labelStyle={{
              ...FONTS.h3,
              color: COLORS.black,
              marginLeft: SIZES.base - 3,
            }}
            iconStyle={{
              ...styles.iconSize15,
              tintColor: COLORS.primary2,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default HorizontalCourseCard;
