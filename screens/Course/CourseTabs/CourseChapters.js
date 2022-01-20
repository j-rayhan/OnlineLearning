import * as React from 'react';
import {View, Text, ScrollView, Image, FlatList} from 'react-native';

import {IconBtn, IconLabel, LineDivider, TextBtn} from '../../../components';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  iconSize,
  constants,
  dummyData,
  images,
} from '../../../constants';
import {styles} from '../../styles';
const CourseChapters = ({title}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Title */}
        <Text style={{...FONTS.h2}}>{dummyData.course_details.title}</Text>
        {/* Students & durations */}
        <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
          <Text style={{color: COLORS.gray30, ...FONTS.body4}}>{dummyData.course_details.number_of_students} </Text>
          <IconLabel
            icon={icons.time}
            label={dummyData.course_details.duration}
            contentContainerStyle={{
              marginLeft: SIZES.base,
            }}
            labelStyle={{
              ...FONTS.body4,
            }}
            iconStyle={iconSize(15)}
            />
        </View>
        {/* Instructor */}
        <View
          style={[styles.row, {marginTop: SIZES.radius}]}
        >
          {/* Profile */}
            <Image
              source={images.profile}
              style={{
                ...iconSize(50),
                borderRadius: 25,
              }}
            />
          {/* Name, Title */}
          <View
            style={[styles.container, {
              justifyContent: 'center',
              marginLeft: SIZES.base,
            }]}
          >
            <Text
              style={{
                ...FONTS.h3,
                fontSize: 18,
              }}
            >
              {dummyData.course_details.instructor.name}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.gray20,
              }}
            >
              {dummyData.course_details.instructor.title}
            </Text>
          </View>
          {/* Next button */}
          <TextBtn
            label={'Follow +'}
            contentContainerStyle={{
              width: 80,
              height: 35,
              borderRadius: 20,
            }}
            labelStyle={{
              ...FONTS.h3,
            }}
            />
        </View>
      </View>
    )
  }
  return (
    <ScrollView>
      {/* Header */}
      {renderHeader()}
      {/* Line Divider */}
      <LineDivider 
        lineStyle={{
          height: 1,
          marginVertical: SIZES.radius
        }}
      />
      {/* Chapters */}
      {/* Popular course */}
    </ScrollView>
  );
};

export default CourseChapters;
