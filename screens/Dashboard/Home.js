import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  dummyData,
  constants,
} from '../../constants';
import {
  CategoryCard,
  IconBtn,
  LineDivider,
  TextBtn,
  VerticalCourseCard,
} from '../../components';
import {styles} from '../styles';
const Section = ({containerStyle, title, onPress, children}) => {
  return (
    <View style={containerStyle}>
      <View style={{...styles.row, paddingHorizontal: SIZES.padding}}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TextBtn
          contentContainerStyle={styles.homeSectionSeeAllBtn}
          label={'See All'}
          onPress={onPress}
        />
      </View>
      {children}
    </View>
  );
};
const Home = () => {
  const renderHeader = () => {
    return (
      <View style={[styles.row, styles.homeHeaderContainer]}>
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
  const renderCourse = () => {
    return (
      <FlatList
        horizontal
        listKey="Course"
        data={dummyData.courses_list_1}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `course_${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({item, index}) => {
          return (
            <VerticalCourseCard
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{
                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index === dummyData.courses_list_1.length - 1
                    ? SIZES.padding
                    : 0,
              }}
              course={item}
            />
          );
        }}
      />
    );
  };
  const renderCategories = () => {
    return (
      <Section title={'Categories'}>
        <FlatList
          horizontal
          listKey="Categories"
          data={dummyData.categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `category_${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => {
            return (
              <CategoryCard
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : SIZES.base,
                  marginRight:
                    index === dummyData.categories.length - 1
                      ? SIZES.padding
                      : 0,
                }}
                category={item}
              />
            );
          }}
        />
      </Section>
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
        {/* Course */}
        {renderCourse()}
        <LineDivider lineStyle={{marginVertical: SIZES.padding}} />
        {/* Categories */}
        {renderCategories()}
      </ScrollView>
    </View>
  );
};

export default Home;
