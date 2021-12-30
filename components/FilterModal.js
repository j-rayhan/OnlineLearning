import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-native-shared-element';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
//
import {LineDivider, TextBtn} from '../components';
import {COLORS, FONTS, SIZES, icons, dummyData, images} from '../constants';
import {styles} from '../screens/styles';

const FilterModal = ({filterModalShareValue1, filterModalShareValue2}) => {
  const filterModalContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        filterModalShareValue1.value,
        [SIZES.height, 0],
        [0, 1],
      ),
      transform: [
        {
          translateY: filterModalShareValue1.value,
        },
      ],
    };
  });
  const filterModalContainerBGAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        filterModalShareValue2.value,
        [SIZES.height, 0],
        [0, 1],
      ),
    };
  });
  const filterModalContentAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        filterModalShareValue2.value,
        [SIZES.height, 0],
        [0, 1],
      ),
      transform: [
        {
          translateY: filterModalShareValue2.value,
        },
      ],
    };
  });
  return (
    // Main Container
    <Animated.View
      style={[styles.filterModalContainer, filterModalContainerAnimatedStyle]}>
      {/* BG Container */}
      <Animated.View
        style={[
          styles.filterModalBGContainer,
          filterModalContainerBGAnimatedStyle,
        ]}>
      {/* Content container */}
      <Animated.View
        style={[
          styles.filterModalContent,
          filterModalContentAnimatedStyle,
        ]}>
          {/*  */}
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};
export default FilterModal;
