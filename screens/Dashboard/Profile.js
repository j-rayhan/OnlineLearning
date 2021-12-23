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
  ProgressBar,
} from '../../components';
import {styles} from '../styles';

const Profile = () => {
  const renderHeader = () => {
    return (
      <View style={[styles.rowSpread, styles.profileHeader]}>
        <Text style={{...FONTS.h1}}>Profile</Text>
        <IconBtn icon={icons.sun} iconStyle={{tintColor: COLORS.black}} />
      </View>
    );
  };
  const renderProfileCard = () => {
    return (
      <View style={styles.profileCardContainer}>
        <TouchableOpacity style={styles.iconSize80}>
          <Image source={images.profile} style={styles.profileCardImage} />
          <View style={styles.profileCardCameraSection}>
            <View style={styles.profileCardCameraContainer}>
              <Image
                source={icons.camera}
                resizeMode="contain"
                style={styles.iconSize17}
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* Details */}
        <View style={styles.profileCardDetailsContainer}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>
            By react native
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>
            Full Stack Developer
          </Text>
          {/* Progress */}
          <ProgressBar
            progress={'58%'}
            containerStyle={{
              marginTop: SIZES.radius,
            }}
          />
          <View style={styles.flexRow}>
            <Text style={styles.overallProgress}>Overall Progress</Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>58%</Text>
          </View>
          {/* Member */}
          <TextBtn
            label={'+ Become Member'}
            contentContainerStyle={styles.PCTBContentContainerStyle}
            labelStyle={{
              color: COLORS.primary,
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.containerWhite}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.width * 0.4,
        }}>
        {renderProfileCard()}
      </ScrollView>
    </View>
  );
};

export default Profile;
