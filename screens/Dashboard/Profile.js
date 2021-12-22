import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {
  CategoryCard,
  HorizontalCourseCard,
  IconBtn,
  LineDivider,
  TextBtn,
  VerticalCourseCard,
} from '../../components';
import {styles} from '../styles';

const Profile = () => {
  const renderHeader = () => {
    return (
      <View
        style={[
          styles.rowSpread,
          {
            marginTop: 50,
            paddingHorizontal: SIZES.padding,
          },
        ]}>
        <Text style={{...FONTS.h1}}>Profile</Text>
        <IconBtn icon={icons.sun} iconStyle={{tintColor: COLORS.black}} />
      </View>
    );
  };
  const renderProfileCard = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary3,
        }}>
        <TouchableOpacity style={{width: 80, height: 80}}>
          <Image
            source={images.profile}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 40,
              borderWidth: 1,
              borderColor: COLORS.width,
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                marginBottom: -15,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
              }}>
              <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.containerWhite}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 300,
        }}>
        {renderProfileCard()}
      </ScrollView>
    </View>
  );
};

export default Profile;
