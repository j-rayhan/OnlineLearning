import * as React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES, icons, images} from '../../constants';
import {
  IconBtn,
  LineDivider,
  TextBtn,
  ProgressBar,
  ProfileValue,
  ProfileRadioBtn,
} from '../../components';
import {toggleTheme} from '../../store/themeActions';
import {styles} from '../styles';

const Profile = () => {
  const dispatch = useDispatch();
  const {appTheme} = useSelector(state => state);
  const [newCourseNotification, setCourseNotification] = React.useState(false);
  const [studyReminder, setStudyReminder] = React.useState(false);

  const handleTheme = () => {
    if (appTheme.name === 'dark') {
      dispatch(toggleTheme('light'));
    } else {
      dispatch(toggleTheme('dark'));
    }
  };
  const renderHeader = () => {
    return (
      <View style={[styles.rowSpread, styles.profileHeader]}>
        <Text style={{...FONTS.h1}}>Profile</Text>
        <IconBtn
          icon={icons.sun}
          iconStyle={{tintColor: COLORS.black}}
          onPress={() => handleTheme()}
        />
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
  const renderProfileSection1 = () => {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue
          icon={icons.profile}
          label={'Name'}
          value={'By MR. Designer'}
        />
        <LineDivider />
        <ProfileValue
          icon={icons.email}
          label={'Email'}
          value={'example@example.com'}
        />
        <LineDivider />
        <ProfileValue
          icon={icons.password}
          label={'Password'}
          value={'Update 2 weeks ago'}
        />
        <LineDivider />
        <ProfileValue
          icon={icons.call}
          label={'Call'}
          value={'+8801911111111'}
        />
      </View>
    );
  };
  const renderProfileSection2 = () => {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue icon={icons.star_1} value={'Pages'} />
        <LineDivider />
        <ProfileRadioBtn
          icon={icons.new_icon}
          label={'New Course Notification'}
          isSelected={newCourseNotification}
          onPress={() => setCourseNotification(!newCourseNotification)}
        />
        <LineDivider />
        <ProfileRadioBtn
          icon={icons.reminder}
          label={'Study Reminder'}
          isSelected={studyReminder}
          onPress={() => setStudyReminder(!studyReminder)}
        />
      </View>
    );
  };
  return (
    <View
      style={[
        styles.containerWhite,
        {backgroundColor: appTheme?.backgroundColor1},
      ]}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.width * 0.4,
        }}>
        {renderProfileCard()}
        {/* Profile sections */}
        {renderProfileSection1()}
        {renderProfileSection2()}
      </ScrollView>
    </View>
  );
};

export default Profile;
