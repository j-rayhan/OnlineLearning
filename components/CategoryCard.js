import * as React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../constants';
import {styles} from '../screens/styles';

const CategoryCard = ({containerStyle, category}) => {
  return (
    <TouchableOpacity>
      {/* Image section */}
      <ImageBackground
        source={category.thumbnail}
        resizeMode="cover"
        style={{
          ...styles.categoryContainer,
          ...containerStyle,
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
