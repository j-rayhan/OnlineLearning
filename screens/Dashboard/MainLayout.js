import * as React from 'react';
import {View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Home, Profile, Search} from '../../screens';
import {COLORS, SIZES, FONTS, constants} from '../../constants';
import {styles} from '../styles';
const bottom_tabs = constants.bottom_tabs.map(item => ({
  ...item,
  ref: React.createRef(),
}));
const TabIndicator = ({measureLayout, scrollX}) => {
  const inputRange = bottom_tabs.map((v, i) => i * SIZES.width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(v => v.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(v => v.x),
  });
  return (
    <Animated.View
      style={[
        styles.tabIndicator,
        {width: indicatorWidth, transform: [{translateX}]},
      ]}
    />
  );
};
const Tabs = ({scrollX, onBottomTabPress}) => {
  const containerRef = React.useRef();
  const [measureLayout, setLayout] = React.useState([]);
  React.useEffect(() => {
    let ml = [];
    bottom_tabs.forEach(item => {
      item?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({x, y, width, height});
          if (ml.length === bottom_tabs.length) {
            setLayout(ml);
          }
        },
      );
    });
  }, [containerRef.current]);
  return (
    <View ref={containerRef} style={[styles.container, styles.row]}>
      {/* Tab indicator */}
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}
      {bottom_tabs.map(({ref, label, icon}, index) => (
        <TouchableOpacity
          key={`bottom_tab_${label}`}
          ref={ref}
          onPress={() => onBottomTabPress(index)}
          style={[
            styles.container,
            styles.center,
            {
              paddingHorizontal: SIZES.font + 1,
            },
          ]}>
          <Image source={icon} resizeMode="contain" style={styles.iconSize25} />
          <Text
            style={{
              marginTop: SIZES.base - 5,
              color: COLORS.white,
              ...FONTS.h3,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const MainLayout = () => {
  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onBottomTabPress = React.useCallback(bottomIndex => {
    flatListRef?.current?.scrollToOffset({
      offset: bottomIndex * SIZES.width,
    });
  }, []);
  const renderContent = () => {
    return (
      <View style={styles.container}>
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment={'center'}
          snapToInterval={SIZES.width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `main_${item.id}`}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            return (
              <View style={{width: SIZES.width, height: SIZES.height}}>
                {item.label === constants.screens.home && <Home />}
                {item.label === constants.screens.profile && <Profile />}
                {item.label === constants.screens.search && <Search />}
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderBottomTabs = () => {
    return (
      <View
        style={{
          marginBottom: SIZES.padding - 4,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
        }}>
        <Shadow size={[SIZES.width - SIZES.padding * 2, 85]}>
          <View
            style={[
              styles.container,
              {
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary3,
              },
            ]}>
            <Tabs scrollX={scrollX} onBottomTabPress={onBottomTabPress} />
          </View>
        </Shadow>
      </View>
    );
  };
  return (
    <View style={styles.containerWhite}>
      {/* Content */}
      {renderContent()}
      {/* Bottom tabs */}
      {renderBottomTabs()}
    </View>
  );
};

export default MainLayout;
