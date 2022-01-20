/* eslint-disable react-native/no-inline-styles */
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
        }}>
        {/* Title */}
        <Text style={{...FONTS.h2}}>{dummyData.course_details.title}</Text>
        {/* Students & durations */}
        <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
          <Text style={{color: COLORS.gray30, ...FONTS.body4}}>
            {dummyData.course_details.number_of_students}{' '}
          </Text>
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
        <View style={[styles.row, {marginTop: SIZES.radius}]}>
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
            style={[
              styles.container,
              {
                justifyContent: 'center',
                marginLeft: SIZES.base,
              },
            ]}>
            <Text
              style={{
                ...FONTS.h3,
                fontSize: 18,
              }}>
              {dummyData.course_details.instructor.name}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.gray20,
              }}>
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
    );
  };
  const renderChapter = () => {
    return (
      <View>
        {dummyData.course_details.videos.map((item, index) => {
          return (
            <View
              key={`video_${index}`}
              style={{
                alignItems: 'center',
                height: 70,
                backgroundColor: item.is_playing
                  ? COLORS.additionalColor11
                  : null,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                  height: 70,
                }}>
                {/* Icon */}
                <Image
                  source={
                    item?.is_complete
                      ? icons.completed
                      : item?.is_playing
                      ? icons.play_1
                      : icons.lock
                  }
                  style={{
                    ...iconSize(40),
                  }}
                />
                {/* Title & Duration*/}
                <View style={{flex: 1, marginLeft: SIZES.radius}}>
                  <Text style={{...FONTS.h3}}>{item?.title}</Text>
                  <Text style={{...FONTS.body4, color: COLORS.gray30}}>
                    {item?.duration}
                  </Text>
                </View>
                {/* Size & Status */}
                <View style={{flexDirection: 'row'}}>
                  {/* Size */}
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.gray30,
                    }}>
                    {item?.size}
                  </Text>
                  {/* Status */}
                  <Image
                    source={
                      item?.is_downloaded ? icons.completed : icons.download
                    }
                    style={{
                      ...iconSize(25),
                      marginLeft: SIZES.base,
                      tintColor: item?.is_lock ? COLORS.additionalColor4 : null,
                    }}
                  />
                </View>
              </View>
              {item?.is_playing && (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: 5,
                    width: item?.progress,
                    backgroundColor: COLORS.primary,
                  }}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView>
      {/* Header */}
      {renderHeader()}
      {/* Line Divider */}
      <LineDivider
        lineStyle={{
          height: 1,
          marginVertical: SIZES.radius,
        }}
      />
      {/* Chapters */}
      {renderChapter()}
      {/* Popular course */}
    </ScrollView>
  );
};

export default CourseChapters;
