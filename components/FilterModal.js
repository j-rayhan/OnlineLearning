/* eslint-disable react-native/no-inline-styles */
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
import {LineDivider, TextBtn, TwoPointSlider} from '../components';
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
const ClassLevelOptions = ({
  containerStyle,
  classLevel,
  isListItem,
  isSelected,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.row,
          {
            height: SIZES.padding * 2 + 2,
            ...containerStyle,
          },
        ]}
        onPress={onPress}>
        {/* content */}
        <Text
          style={{
            ...styles.container,
            ...FONTS.body3,
          }}>
          {classLevel?.label}
        </Text>
        <Image
          source={isSelected ? icons.checkbox_on : icons.checkbox_off}
          resizeMode="contain"
          style={styles.iconSize20}
        />
      </TouchableOpacity>
      {!isListItem && <LineDivider lineStyle={{height: 1}} />}
    </>
  );
};
const FilterModal = ({filterModalShareValue1, filterModalShareValue2}) => {
  const navigation = useNavigation();
  const [selectClassType, setClassType] = React.useState('');
  const [selectClassLevel, setClassLevel] = React.useState('');
  const [selectedCreatedWithin, setCreatedWithin] = React.useState('');
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
            {/* Class Level */}
            <View style={{marginTop: SIZES.radius}}>
              <Text style={FONTS.h3}>Class Level</Text>
              <View>
                {constants.class_levels.map((item, index) => (
                  <ClassLevelOptions
                    key={`class_level_key_${index}`}
                    classLevel={item}
                    isSelected={selectClassLevel === item.id}
                    isListItem={index === constants.class_levels.length - 1}
                    containerStyle={{
                      marginLeft: SIZES.base,
                    }}
                    onPress={() => {
                      setClassLevel(item.id);
                    }}
                  />
                ))}
              </View>
            </View>
            {/* Created Within */}
            <View style={{marginTop: SIZES.radius}}>
              <Text style={FONTS.h3}>Created Within</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {constants.created_within.map((item, index) => (
                  <TextBtn
                    key={`created_within_key_${index}`}
                    label={item.label}
                    contentContainerStyle={{
                      height: 45,
                      paddingHorizontal: SIZES.radius,
                      marginLeft: index % 3 === 0 ? 0 : SIZES.radius,
                      marginTop: SIZES.radius,
                      borderRadius: SIZES.radius,
                      borderWidth: 1,
                      borderColor: COLORS.gray20,
                      backgroundColor:
                        item.id === selectedCreatedWithin
                          ? COLORS.primary3
                          : null,
                    }}
                    labelStyle={{
                      color:
                        item.id === selectedCreatedWithin
                          ? COLORS.white
                          : COLORS.black,
                      ...FONTS.body3,
                    }}
                    onPress={() => {
                      setCreatedWithin(item.id);
                    }}
                  />
                ))}
              </View>
            </View>
            {/* Class length */}
            <View style={{marginTop: SIZES.radius}}>
              <Text style={FONTS.h3}>Class Length</Text>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <TwoPointSlider
                  values={[25, 38]}
                  min={10}
                  max={80}
                  postfix={'min'}
                  onValueChange={v =>
                    console.log('PRINT IN %s=====>', 'Sliver START ***', v)
                  }
                />
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};
export default FilterModal;
