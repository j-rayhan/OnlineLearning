import * as React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {styles} from '../screens/styles';

const CategoryCard = ({containerStyle, category, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {/* Image section */}
      <ImageBackground
        source={category.thumbnail}
        resizeMode="cover"
        style={{
          ...styles.categoryContainer,
          ...containerStyle,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}>
          {category?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default CategoryCard;
