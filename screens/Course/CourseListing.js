import * as React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {FlatList} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

import {COLORS, FONTS, SIZES, icons, dummyData} from '../../constants';
import {styles} from '../styles';

const CourseListing = () => {
  return (
    <View style={styles.containerWhite}>
      <Text>Course Listing </Text>
    </View>
  );
};

export default CourseListing;
