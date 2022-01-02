import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {SIZES} from '../constants';
import {styles} from '../screens/styles';

const CategoryCard = ({
  sharedElementPrefix,
  containerStyle,
  category,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{width: 200, height: 150, ...containerStyle}}
      onPress={onPress}>
      <SharedElement
        id={`${sharedElementPrefix}_category_card_bg_${category?.id}`}
        style={[StyleSheet.absoluteFill]}>
        {/* Image section */}
        <Image
          source={category.thumbnail}
          resizeMode="cover"
          style={{
            width: SIZES['100_P'],
            height: SIZES['100_P'],
            borderRadius: SIZES.radius,
          }}
        />
      </SharedElement>
      {/* Title */}
      <View style={styles.categoryCardTitleContainer}>
        <SharedElement
          id={`${sharedElementPrefix}_category_card_title_${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}>
          <Text style={styles.categoryCardTitle}>{category?.title}</Text>
        </SharedElement>
      </View>
    </TouchableOpacity>
  );
};
export default CategoryCard;
