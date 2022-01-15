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

const CourseDetails = ({navigation, route}) => {
  const {selectedCourse} = route.params;
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
            navigation.goBack()
          }}
        />
      </View>
      {/* Share & Favorite */}
      <View style={{flexDirection: 'row'}}>
        <IconBtn
          icon={icons.star_1}
          iconStyle={{
            tintColor: COLORS.white,
          }}
          containerStyle={{
            ...styles.center,
            ...iconSize(50)
          }}
          />
          <IconBtn
            icon={icons.favourite}
            iconStyle={{
              tintColor: COLORS.white,
            }}
            containerStyle={{
              ...styles.center,
              ...iconSize(50)
            }}
            />
      </View>
      </>
    )
  }
  const renderHeader = () => {
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
        }}
      >
        {/*  back button */}
        {renderHeaderComponent()}
      </View>
    )
  }
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
          }}
        >
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
          />
          </ImageBackground>
      </View>
    );
  };
  return (
    <View style={[styles.containerWhite]}>
      {/* render header */}
      {renderHeader()}
      {/* Video section */}
      {renderVideoSection()}
    </View>
  );
};

export default CourseDetails;
