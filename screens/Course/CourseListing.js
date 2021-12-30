import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
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
  HorizontalCourseCard,
  FilterModal,
} from '../../components';
import {COLORS, FONTS, SIZES, icons, dummyData, images} from '../../constants';
import {styles} from '../styles';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const HEADER_HEIGHT = 250;
const CourseListing = ({navigation, route}) => {
  const {category, sharedElementPrefix} = route.params;
  const flatListRef = React.useRef();
  const scrollY = useSharedValue(0);
  const filterModalShareValue1 = useSharedValue(SIZES.height);
  const filterModalShareValue2 = useSharedValue(SIZES.height);
  const onScroll = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });
  const backHandler = () => {
    navigation.goBack();
  };
  const headerSharedValue = useSharedValue(80);

  const renderHeader = () => {
    const inputRange = [0, HEADER_HEIGHT - 50];
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
    const headerHeightAnimatedStyle = useAnimatedStyle(() => {
      return {
        height: interpolate(
          scrollY.value,
          inputRange,
          [HEADER_HEIGHT, 120],
          Extrapolate.CLAMP,
        ),
      };
    });
    const headerShowOnScrollAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(scrollY.value, [80, 0], [1, 0], Extrapolate.CLAMP),
        transform: [
          {
            translateY: interpolate(
              scrollY.value,
              inputRange,
              [50, 130],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    });
    const headerHideOnScrollAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(scrollY.value, [80, 0], [0, 1], Extrapolate.CLAMP),
        transform: [
          {
            translateY: interpolate(
              scrollY.value,
              inputRange,
              [0, 200],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    });
    return (
      <Animated.View
        style={[
          styles.courseListingHeaderContainer,
          headerHeightAnimatedStyle,
        ]}>
        <SharedElement
          id={`${sharedElementPrefix}_category_card_bg_${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}>
          <Image
            source={category?.thumbnail}
            resizeMode="cover"
            style={{
              width: SIZES['100_P'],
              height: SIZES['100_P'],
              borderBottomLeftRadius: SIZES.radius * 5,
            }}
          />
        </SharedElement>
        {/* Title */}
        <Animated.View
          style={[
            styles.courseListingHeaderText2,
            headerShowOnScrollAnimatedStyle,
          ]}>
          <Text style={styles.courseListingHeaderTitle}>{category?.title}</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.courseListingHeaderText,
            headerHideOnScrollAnimatedStyle,
          ]}>
          <SharedElement
            id={`${sharedElementPrefix}_category_card_title_${category?.id}`}
            style={[StyleSheet.absoluteFillObject]}>
            <Text style={[styles.categoryCardTitle, {...FONTS.h1}]}>
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
            onPress={() => {
              if (scrollY.value > 0 && scrollY.value <= 200) {
                flatListRef.current?.scrollToOffset({
                  offset: 0,
                  animated: true,
                });
                setTimeout(() => {
                  headerSharedValue.value = withTiming(
                    80,
                    {
                      duration: 500,
                    },
                    () => {
                      runOnJS(backHandler)();
                    },
                  );
                }, 100);
              } else {
                backHandler();
              }
            }}
          />
        </Animated.View>
        <Animated.Image
          source={images.mobile_image}
          resizeMode={'contain'}
          style={[
            styles.courseListingHeaderImage,
            headerFadeInAnimatedStyle,
            headerTranslateAnimatedStyle,
            headerHideOnScrollAnimatedStyle,
          ]}
        />
      </Animated.View>
    );
  };
  const renderResults = () => {
    return (
      <AnimatedFlatList
        ref={flatListRef}
        data={dummyData.courses_list_2}
        keyExtractor={item => `results_${item?.id}`}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode={'on-drag'}
        onScroll={onScroll}
        ListHeaderComponent={
          <View
            style={[styles.row, {marginTop: 270, marginBottom: SIZES.base}]}>
            <Text
              style={{
                ...FONTS.body3,
                ...styles.container,
              }}>
              57,345 Results
            </Text>
            {/* Filter button */}
            <IconBtn
              icon={icons.filter}
              iconStyle={styles.iconSize20}
              containerStyle={[styles.center, styles.filterBtnContainer]}
              onPress={() => {
                filterModalShareValue1.value = withTiming(0, {
                  duration: 100,
                });
                filterModalShareValue2.value = withDelay(
                  100,
                  withTiming(0, {
                    duration: 500,
                  }),
                );
              }}
            />
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalCourseCard
              course={item}
              containerStyle={{
                marginVertical: SIZES.padding,
                marginTop: index === 0 ? SIZES.radius : SIZES.padding,
              }}
            />
          );
        }}
        ItemSeparatorComponent={() => (
          <LineDivider
            lineStyle={{
              backgroundColor: COLORS.gray20,
            }}
          />
        )}
      />
    );
  };
  return (
    <View style={styles.containerWhite}>
      {/* Results */}
      {renderResults()}
      {/* Header */}
      {renderHeader()}
      {/* Filter */}
      <FilterModal
        {...{
          filterModalShareValue1,
          filterModalShareValue2,
        }}
      />
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
