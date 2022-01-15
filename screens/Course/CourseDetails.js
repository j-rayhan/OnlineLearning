/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';
import Video from 'react-native-video';

import {IconBtn, LineDivider} from '../../components';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  iconSize,
  constants,
  dummyData,
} from '../../constants';
import {styles} from '../styles';

const course_details_tabs = constants.course_details_tabs.map(item => ({
  ref: React.createRef(),
  ...item,
}));
const TabIndicator = ({scrollX, measureLayout}) => {
  const inputRange = course_details_tabs.map((_, i) => i * SIZES.width);
  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(ml => ml.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(ml => ml.x),
  });
  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 0,
        width: tabIndicatorWidth,
        height: 4,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        transform: [{translateX}],
      }}
    />
  );
};
const Tabs = ({scrollX, onTabPress}) => {
  const [measureLayout, setMeasureLayout] = React.useState([]);
  const containerRef = React.useRef();
  React.useEffect(() => {
    let ml = [];
    course_details_tabs.forEach(item => {
      item?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });
          if (ml.length === course_details_tabs.length) {
            setMeasureLayout(ml);
          }
        },
      );
    });
  }, [containerRef.current]);
  return (
    <View
      ref={containerRef}
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      {/* Tab Indicator */}
      {measureLayout.length > 0 && (
        <TabIndicator scrollX={scrollX} measureLayout={measureLayout} />
      )}
      {/* Tabs */}
      {course_details_tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`tab_${index}`}
            ref={item.ref}
            style={{
              flex: 1,
              paddingHorizontal: 15,
              ...styles.center,
            }}
            onPress={() => onTabPress(index)}>
            <Text
              style={{
                ...FONTS.h3,
                fontSize: SIZES.height > 800 ? 18 : 17,
              }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const CourseDetails = ({navigation, route}) => {
  const {selectedCourse} = route.params;
  const [playVideo, setPlayVideo] = React.useState(false);
  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onTabPress = tabIndex => {
    flatListRef?.current?.scrollToOffset({
      offset: tabIndex * SIZES.width,
    });
  };
  const renderHeaderComponent = () => {
    return (
      <>
        {/* Back */}
        <View style={styles.container}>
          <IconBtn
            icon={icons.back}
            iconStyle={{
              tintColor: COLORS.black,
              ...iconSize(),
            }}
            containerStyle={{
              borderRadius: 20,
              backgroundColor: COLORS.white,
              ...styles.center,
              ...iconSize(40),
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        {/* Share & Favorite */}
        <View style={{flexDirection: 'row'}}>
          <IconBtn
            icon={icons.media}
            iconStyle={{
              tintColor: COLORS.white,
            }}
            containerStyle={{
              ...styles.center,
              ...iconSize(50),
            }}
          />
          <IconBtn
            icon={icons.favourite_outline}
            iconStyle={{
              tintColor: COLORS.white,
            }}
            containerStyle={{
              ...styles.center,
              ...iconSize(50),
            }}
          />
        </View>
      </>
    );
  };
  const renderHeader = () => {
    if (playVideo) {
      return (
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            paddingBottom: SIZES.base,
            height: 85,
            backgroundColor: COLORS.black,
            alignItems: 'flex-end',
          }}>
          {renderHeaderComponent()}
        </View>
      );
    }
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 40 : 20,
          left: 0,
          right: 0,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          zIndex: 1,
        }}>
        {/*  back button */}
        {renderHeaderComponent()}
      </View>
    );
  };
  const renderVideoSection = () => {
    return (
      <View
        style={{
          height: SIZES.height > 800 ? 250 : 220,
          ...styles.center,
          backgroundColor: COLORS.gray90,
        }}>
        {/* thumbnail */}
        <ImageBackground
          source={selectedCourse?.thumbnail}
          style={{
            width: '100%',
            height: '100%',
            ...styles.center,
          }}>
          {/* play button */}
          <IconBtn
            icon={icons.play}
            iconStyle={{
              tintColor: COLORS.white,
              ...iconSize(),
            }}
            containerStyle={{
              marginTop: SIZES.padding,
              borderRadius: 30,
              backgroundColor: COLORS.primary,
              ...iconSize(55),
              ...styles.center,
            }}
            onPress={() => setPlayVideo(true)}
          />
        </ImageBackground>
        {playVideo && (
          <Video
            source={{uri: dummyData?.sample_video_url}}
            controls={true}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: COLORS.black,
            }}
          />
        )}
      </View>
    );
  };
  const renderContent = () => {
    return (
      <View style={styles.container}>
        {/* Tabs */}
        <View
          style={{
            height: 60,
            backgroundColor: COLORS.additionalColor13,
          }}>
          <Tabs scrollX={scrollX} onTabPress={onTabPress} />
        </View>
        {/* Line Divider */}
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray20,
          }}
        />
        {/* Content */}
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          snapToAlignment={'center'}
          snapToInterval={SIZES.width}
          decelerationRate={'fast'}
          keyboardDismissMode={'on-drag'}
          showsHorizontalScrollIndicator={false}
          data={constants.course_details_tabs}
          keyExtractor={item => `course_details_tab${item?.id}`}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            return (
              <View style={{width: SIZES.width}}>
                {index === 0 && <Text>Chapters</Text>}
                {index === 1 && <Text>Files</Text>}
                {index === 2 && <Text>Description</Text>}
              </View>
            );
          }}
        />
      </View>
    );
  };
  return (
    <View style={[styles.containerWhite]}>
      {/* render header */}
      {renderHeader()}
      {/* Video section */}
      {renderVideoSection()}
      {/* content */}
      {renderContent()}
    </View>
  );
};

export default CourseDetails;
