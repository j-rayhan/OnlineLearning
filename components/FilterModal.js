import * as React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SharedElement} from 'react-native-shared-element';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
//
import {LineDivider, TextBtn} from '../components';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  dummyData,
  images,
  constants,
} from '../constants';
import {styles} from '../screens/styles';
const ClassTypeOptions = ({containerStyle, classType, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles.center,
        styles.classTypeContainer,
        {
          backgroundColor: isSelected
            ? COLORS.primary3
            : COLORS.additionalColor9,
          ...containerStyle,
        },
      ]}
      onPress={onPress}>
      {/* content */}
      <Image
        source={classType?.icon}
        resizeMode="contain"
        style={[
          styles.iconSize40,
          {tintColor: isSelected ? COLORS.white : COLORS.gray80},
        ]}
      />
      <Text
        style={{
          marginTop: SIZES.base,
          color: isSelected ? COLORS.white : COLORS.gray80,
          ...FONTS.h3,
        }}>
        {classType?.label}
      </Text>
    </TouchableOpacity>
  );
};
const FilterModal = ({filterModalShareValue1, filterModalShareValue2}) => {
  const navigation = useNavigation();
  const [selectClassType, setClassType] = React.useState('');
  const [selectClassLevel, setClassLevel] = React.useState('');
  const filterModalContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        filterModalShareValue1.value,
        [SIZES.height, 0],
        [0, 1],
      ),
      transform: [
        {
          translateY: filterModalShareValue1.value,
        },
      ],
    };
  });
  const filterModalContainerBGAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        filterModalShareValue2.value,
        [SIZES.height, 0],
        [0, 1],
      ),
    };
  });
  const filterModalContentAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        filterModalShareValue2.value,
        [SIZES.height, 0],
        [0, 1],
      ),
      transform: [
        {
          translateY: filterModalShareValue2.value,
        },
      ],
    };
  });
  return (
    // Main Container
    <Animated.View
      style={[styles.filterModalContainer, filterModalContainerAnimatedStyle]}>
      {/* BG Container */}
      <Animated.View
        style={[
          styles.filterModalBGContainer,
          filterModalContainerBGAnimatedStyle,
        ]}>
        {/* Content container */}
        <Animated.View
          style={[styles.filterModalContent, filterModalContentAnimatedStyle]}>
          {/* Header */}
          <View style={styles.filterModalHeaderContainer}>
            <View style={{width: SIZES.radius * 5}} />
            <Text style={styles.filterModalTitle}>Filter</Text>
            <TextBtn
              label={'Cancel'}
              contentContainerStyle={styles.filterModalCancelBtnContainer}
              labelStyle={{
                color: COLORS.black,
                ...FONTS.body3,
              }}
              onPress={() => {
                filterModalShareValue2.value = withTiming(SIZES.height, {
                  duration: 500,
                });
                filterModalShareValue1.value = withDelay(
                  500,
                  withTiming(SIZES.height, {
                    duration: 100,
                  }),
                );
              }}
            />
          </View>
          {/* Content */}
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: SIZES.padding,
              paddingBottom: SIZES.padding * 2,
            }}>
            {/* Class Type */}
            <View style={{marginTop: SIZES.radius}}>
              <Text style={FONTS.h3}>Class Type</Text>
              <View
                style={{
                  marginTop: SIZES.radius,
                  flexDirection: 'row',
                }}>
                {constants.class_types.map((item, index) => (
                  <ClassTypeOptions
                    key={`class_type_key_${index}`}
                    classType={item}
                    isSelected={selectClassType === item.id}
                    containerStyle={{
                      marginLeft: index === 0 ? 0 : SIZES.base,
                    }}
                    onPress={() => {
                      setClassType(item.id);
                    }}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};
export default FilterModal;
