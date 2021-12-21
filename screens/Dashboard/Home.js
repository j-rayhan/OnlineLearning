import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  dummyData,
  constants,
} from '../../constants';
import {IconBtn, TextBtn} from '../../components';
import {styles} from '../styles';
const Home = () => {
  const renderHeader = () => {
    return (
      <View
        style={[
          styles.row,
          {marginTop: 40, marginBottom: 10, paddingHorizontal: SIZES.padding},
        ]}>
        {/* Greeting */}
        <View style={styles.container}>
          <Text style={FONTS.h2}>HI Mr.JOHO</Text>
          <Text style={{color: COLORS.gray50, ...FONTS.body3}}>
            Friday, 17th Dec 2021
          </Text>
        </View>
        {/* Notifications */}
        <IconBtn
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  };
  const renderStartLearning = () => {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={styles.learningBG}
        imageStyle={{borderRadius: SIZES.radius}}>
        {/* Info */}
        <View>
          <Text style={{color: COLORS.white, ...FONTS.body2}}>HOW TO</Text>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>
            Make your brand more visible with our checklist
          </Text>
          <Text
            style={{
              color: COLORS.white,
              marginTop: SIZES.radius,
              ...FONTS.body4,
            }}>
            By Mr. Scoot
          </Text>
        </View>
        {/* Image */}
        <Image
          source={images.start_learning}
          resizeMode="contain"
          style={styles.learningImg}
        />
        {/* Text btn */}
        <TextBtn
          label={'Start learning'}
          contentContainerStyle={styles.startLearningText}
          labelStyle={{
            color: COLORS.black,
          }}
        />
      </ImageBackground>
    );
  };
  return (
    <View style={styles.containerWhite}>
      {/* header section */}
      {renderHeader()}
      {/* content section */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: SIZES.height * 0.5,
        }}
        showsVerticalScrollIndicator={false}>
        {/* Start learning */}
        {renderStartLearning()}
      </ScrollView>
    </View>
  );
};

export default Home;
