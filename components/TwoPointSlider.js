import MultiSlider from '@ptomasroos/react-native-multi-slider';
import * as React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {styles} from '../screens/styles';

const TwoPointSlider = ({values, min, max, onValueChange, prefix, postfix}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 30}
      min={min}
      max={max}
      step={1}
      markerOffsetY={15}
      selectedStyle={{
        height: 2,
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 1,
        borderRadius: 10,
        backgroundColor: COLORS.gray30,
      }}
      customMarker={e => {
        return (
          <View
            style={[
              styles.center,
              {height: SIZES.radius * 5, width: SIZES.radius * 5},
            ]}>
            <View
              style={[
                styles.slideCircle,
                {borderColor: COLORS.primary, backgroundColor: COLORS.white},
              ]}
            />
            <Text
              style={{
                marginTop: 5,
                color: COLORS.gray80,
                ...FONTS.body3,
              }}>
              {prefix} {e.currentValue} {postfix}
            </Text>
          </View>
        );
      }}
      onValuesChange={v => onValueChange(v)}
    />
  );
};

export default TwoPointSlider;
