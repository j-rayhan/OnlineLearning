import * as React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
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
import {SharedElement} from 'react-native-shared-element';
//
import {
  IconBtn,
  LineDivider,
  TextBtn,
  ProgressBar,
  ProfileValue,
  ProfileRadioBtn,
} from '../../components';
import {COLORS, FONTS, SIZES, icons, dummyData, images} from '../../constants';
import {styles} from '../styles';

const CourseListing = ({navigation, route}) => {
  const {category, sharedElementPrefix} = route.params;
  const backHandler = () => {
    navigation.goBack();
  };
  const headerSharedValue = useSharedValue(80);

  const renderHeader = () => {
    headerSharedValue.value = withDelay(
      500,
      withTiming(0, {
        duration: 500,
      }),
    );
    const headerFadeInAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(headerSharedValue.value, [80, 0], [0, 1]),
      };
    });
    const headerTranslateAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: headerSharedValue.value,
          },
        ],
      };
    });
    return (
      <Animated.View style={styles.courseListingHeaderContainer}>
        <SharedElement
          id={`${sharedElementPrefix}_category_card_bg_${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}>
          <Image
            source={category?.thumbnail}
            resizeMode="cover"
            style={{
              width: SIZES['100_P'],
              height: SIZES['100_P'],
              borderBottomLeftRadius: 60,
            }}
          />
        </SharedElement>
        {/* Title */}
        <Animated.View style={styles.courseListingHeaderText}>
          <SharedElement
            id={`${sharedElementPrefix}_category_card_title_${category?.id}`}
            style={[StyleSheet.absoluteFillObject]}>
            <Text style={[styles.categoryCardTitle, FONTS.h1]}>
              {category?.title}
            </Text>
          </SharedElement>
        </Animated.View>
        {/* Back Icon */}
        <Animated.View style={headerFadeInAnimatedStyle}>
          <IconBtn
            icon={icons.back}
            iconStyle={{
              tintColor: COLORS.black,
            }}
            containerStyle={styles.backIconContainer}
            onPress={() => backHandler()}
          />
        </Animated.View>
        <Animated.Image
          source={images.mobile_image}
          resizeMode={'contain'}
          style={[
            styles.courseListingHeaderImage,
            headerFadeInAnimatedStyle,
            headerTranslateAnimatedStyle,
          ]}
        />
      </Animated.View>
    );
  };
  return (
    <View style={styles.containerWhite}>
      {/* Header */}
      {renderHeader()}
    </View>
  );
};
CourseListing.sharedElements = (route, otherRoute, showing) => {
  const {category, sharedElementPrefix} = route.params;
  return [
    {
      id: `${sharedElementPrefix}_category_card_bg_${category?.id}`,
    },
    {
      id: `${sharedElementPrefix}_category_card_title_${category?.id}`,
    },
  ];
};
export default CourseListing;
