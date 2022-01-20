/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  Keyboard,
} from 'react-native';

import {
  HorizontalCourseCard,
  IconBtn,
  IconLabel,
  IconLabelBtn,
  LineDivider,
  TextBtn,
} from '../../../components';
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

const CommentSection = ({contentItem, commentOptions, replies}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
      {/* Profile photo */}
      <Image
        source={contentItem?.profile}
        style={{
          ...iconSize(40),
          borderRadius: 20,
        }}
      />
      {/* Name & comment */}
      <View style={{flex: 1, marginTop: 3, marginLeft: SIZES.radius}}>
        <Text style={{...FONTS.h3}}>{contentItem?.name}</Text>
        <Text style={{...FONTS.body3}}>{contentItem?.comment}</Text>
        {commentOptions}
        {replies}
      </View>
    </View>
  );
};

const CourseDiscussion = () => {
  const [footerPosition, setFooterPosition] = React.useState(0);
  const [footerHeight, setFooterHeight] = React.useState(60);
  React.useEffect(() => {
    // listen to keyboard
    const unsubscribeShow = Keyboard.addListener('keyboardWillShow', e => {
      setFooterPosition(e.endCoordinates.height);
    });
    const unsubscribeHide = Keyboard.addListener('keyboardWillHide', e => {
      setFooterPosition(0);
    });
    return () => {
      unsubscribeShow.remove();
      unsubscribeHide.remove();
    };
  }, []);
  const renderDiscussion = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={dummyData.course_details?.discussions}
          keyExtractor={item => `discussion_main_${item.id}`}
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding,
            paddingBottom: 100,
          }}
          renderItem={({item, index}) => {
            return (
              <CommentSection
                contentItem={item}
                commentOptions={
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: SIZES.radius,
                      paddingVertical: SIZES.base,
                      borderTopWidth: 1,
                      borderBottomWidth: 1,
                      borderColor: COLORS.gray20,
                    }}>
                    {/* comment */}
                    <IconLabelBtn
                      icon={icons.comment}
                      label={item?.no_of_comments}
                      iconStyle={{
                        tintColor: COLORS.black,
                      }}
                      labelStyle={{
                        marginLeft: 3,
                        color: COLORS.black,
                        ...FONTS.h4,
                      }}
                    />
                    {/* like */}

                    <IconLabelBtn
                      icon={icons.heart}
                      label={item?.no_of_likes}
                      containerStyle={{
                        marginLeft: SIZES.radius,
                      }}
                      labelStyle={{
                        marginLeft: 3,
                        color: COLORS.black,
                        ...FONTS.h4,
                      }}
                    />
                    {/* date */}
                    <Text
                      style={{
                        flex: 1,
                        textAlign: 'right',
                        ...FONTS.h4,
                      }}>
                      {item?.posted_on}
                    </Text>
                  </View>
                }
                replies={
                  <FlatList
                    data={item?.replies}
                    keyExtractor={_item => `discussion_replies_${_item.id}`}
                    scrollEnabled={false}
                    renderItem={({item, index}) => (
                      <CommentSection
                        contentItem={item}
                        commentOptions={
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: SIZES.radius,
                              paddingVertical: SIZES.base,
                              borderTopWidth: 1,
                              borderBottomWidth: 1,
                              borderColor: COLORS.gray20,
                            }}>
                            {/* comment */}
                            <IconLabelBtn
                              icon={icons.reply}
                              label={'Replay'}
                              labelStyle={{
                                marginLeft: 5,
                                color: COLORS.black,
                                ...FONTS.h4,
                              }}
                            />
                            {/* like */}
                            <IconLabelBtn
                              icon={icons.heart_off}
                              label={'Like'}
                              containerStyle={{
                                marginLeft: SIZES.radius,
                              }}
                              labelStyle={{
                                marginLeft: 5,
                                color: COLORS.black,
                                ...FONTS.h4,
                              }}
                            />
                            {/* date */}
                            <Text
                              style={{
                                flex: 1,
                                textAlign: 'right',
                                ...FONTS.h4,
                              }}>
                              {item?.posted_on}
                            </Text>
                          </View>
                        }
                      />
                    )}
                  />
                }
              />
            );
          }}
        />
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: footerPosition,
          left: 0,
          right: 0,
          height: footerHeight,
          backgroundColor: COLORS.gray10,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
        }}>
        <TextInput
          style={{
            flex: 1,
            marginRight: SIZES.base,
            ...FONTS.body3,
          }}
          multiline
          placeholder="type something..."
          placeholderTextColor={COLORS.gray80}
          onContentSizeChange={event => {
            const height = event.nativeEvent.contentSize.height;
            if (height <= 60) {
              setFooterHeight(60);
            } else if (height > 60 && height <= 100) {
              setFooterHeight(height);
            } else if (height > 100) {
              setFooterHeight(100);
            }
          }}
        />
        <View style={styles.center}>
          <IconBtn
            icon={icons.send}
            iconStyle={{
              ...iconSize(25),
              tintColor: COLORS.primary,
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.containerWhite}>
      {/* Discussion */}
      {renderDiscussion()}
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default CourseDiscussion;
