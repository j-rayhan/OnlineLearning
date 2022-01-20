import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import {IconBtn, TextBtn} from '../../../components';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  iconSize,
  dummyData,
} from '../../../constants';
import {styles} from '../../styles';
const CourseFile = ({title}) => {
  const renderStudents = () => {
    let students = [];
    if (dummyData?.course_details?.students?.length > 3) {
      students = dummyData?.course_details?.students?.slice(0, 3);
    } else {
      students = dummyData?.course_details?.students;
    }
    return (
      <View>
        <Text style={{...FONTS.h2, fontSize: 25}}>Students</Text>
        <View
          style={{
            ...styles.row,
            marginTop: SIZES.radius,
          }}>
          {students.map((item, index) => {
            return (
              <View
                key={`student_${index}`}
                style={{
                  marginLeft: index === 0 ? 0 : SIZES.radius,
                }}>
                <Image
                  source={item?.thumbnail}
                  style={{...iconSize(SIZES.width * 0.22)}}
                />
              </View>
            );
          })}
          {dummyData?.course_details?.students?.length > 3 && (
            <TextBtn
              label={'View All'}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h3,
              }}
              contentContainerStyle={{
                marginLeft: SIZES.base,
                backgroundColor: null,
              }}
            />
          )}
        </View>
      </View>
    );
  };

  const renderFiles = () => {
    return (
      <View style={{marginTop: SIZES.radius}}>
        <Text style={{...FONTS.h2, fontSize: 25}}>Files</Text>
        {dummyData?.course_details?.files?.map((item, index) => {
          return (
            <View
              key={`file_${index}`}
              style={{flexDirection: 'row', marginTop: SIZES.radius}}>
              <Image
                source={item?.thumbnail}
                style={{...iconSize(SIZES.width * 0.22)}}
              />

              <View
                style={{
                  flex: 1,
                  marginLeft: SIZES.radius,
                }}>
                <Text style={{...FONTS.h2}}>{item?.name}</Text>
                <Text style={{...FONTS.body3, color: COLORS.gray30}}>
                  {item?.author}
                </Text>
                <Text style={{...FONTS.body4}}>{item?.upload_date}</Text>
              </View>

              <IconBtn
                icon={icons.menu}
                iconStyle={{
                  ...iconSize(25),
                  tintColor: COLORS.black,
                }}
                containerStyle={{
                  ...styles.center,
                  borderRadius: 25,
                }}
              />
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={{padding: SIZES.padding}}>
      {/* Student List */}
      {renderStudents()}
      {/* Files */}
      {renderFiles()}
    </ScrollView>
  );
};

export default CourseFile;
