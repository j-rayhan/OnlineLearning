import * as React from 'react';
import {View} from 'react-native';
import {COLORS, SIZES} from '../constants';

const LineDivider = ({lineStyle}) => {
  return (
    <View
      style={{
        height: SIZES.base - 6,
        width: SIZES['100_P'],
        backgroundColor: COLORS.gray20,
        ...lineStyle,
      }}
    />
  );
};

export default LineDivider;
