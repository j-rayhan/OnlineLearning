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
} from 'react-native-reanimated';

import {COLORS, FONTS, SIZES, icons, dummyData} from '../../constants';
import {CategoryCard, TextBtn} from '../../components';
import {styles} from '../styles';
const Search = () => {
  const scrollViewRef = React.useRef();
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });
  const renderTopSearches = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{marginHorizontal: SIZES.padding, ...FONTS.h2}}>
          Top Searches
        </Text>
        <FlatList
          horizontal
          listKey="TopSearches"
          data={dummyData.top_searches}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `top_searches_${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => {
            return (
              <TextBtn
                // eslint-disable-next-line react-native/no-inline-styles
                contentContainerStyle={{
                  paddingVertical: SIZES.radius,
                  paddingHorizontal: SIZES.padding,
                  marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                  marginRight:
                    index === dummyData.top_searches.length - 1
                      ? SIZES.padding
                      : 0,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.gray10,
                }}
                label={item.label}
                labelStyle={{
                  color: COLORS.gray50,
                  ...FONTS.h3,
                }}
              />
            );
          }}
        />
      </View>
    );
  };
  const renderBrowsCategory = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Browse Categories
        </Text>
        <FlatList
          listKey="BrowseCategories"
          data={dummyData.categories}
          scrollEnabled={false}
          numColumns={2}
          keyExtractor={item => `browse_categories_${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => {
            return (
              <CategoryCard
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyle={{
                  height: 130,
                  width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
                  marginLeft:
                    (index + 1) % 2 === 0 ? SIZES.radius : SIZES.padding,
                  marginTop: SIZES.radius,
                }}
                category={item}
              />
            );
          }}
        />
      </View>
    );
  };
  const renderSearchComponent = () => {
    const inputRange = [0, 55];
    const searchBarAnimatedStyle = useAnimatedStyle(() => {
      return {
        height: interpolate(
          scrollY.value,
          inputRange,
          [55, 0],
          Extrapolate.CLAMP,
        ),
        opacity: interpolate(
          scrollY.value,
          inputRange,
          [1, 0],
          Extrapolate.CLAMP,
        ),
      };
    });
    return (
      <Animated.View style={[styles.searchSection, searchBarAnimatedStyle]}>
        <Shadow>
          <View
            style={{
              ...styles.container,
              ...styles.row,
              width: SIZES.width - SIZES.padding * 2,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.width,
            }}>
            <Image
              source={icons.search}
              style={{
                ...styles.iconSize20,
                tintColor: COLORS.gray40,
              }}
            />
            <TextInput
              style={{
                ...styles.container,
                marginLeft: SIZES.base,
                ...FONTS.h4,
              }}
              value=""
              placeholder="Search for Topic, Courses, & Educators"
              placeholderTextColor={COLORS.gray}
            />
          </View>
        </Shadow>
      </Animated.View>
    );
  };
  return (
    <View style={styles.containerWhite}>
      <Animated.ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.searchContainer}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode={'on-drag'}
        onScroll={onScroll}
        onScrollEndDrag={e => {
          if (
            e.nativeEvent.contentOffset.y > 10 &&
            e.nativeEvent.contentOffset < 50
          ) {
            scrollViewRef.current?.scrollTo({
              x: 0,
              y: 60,
              animated: true,
            });
          }
        }}>
        {/* top searches */}
        {renderTopSearches()}
        {/* Brows category */}
        {renderBrowsCategory()}
      </Animated.ScrollView>
      {/* render search bar */}
      {renderSearchComponent()}
    </View>
  );
};

export default Search;
