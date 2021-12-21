import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import {COLORS, SIZES} from '../constants';

const IconBtn = ({containerStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image
        source={icon}
        style={{
          width: SIZES.h1,
          height: SIZES.h1,
          tintColor: COLORS.white,
          ...iconStyle,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default IconBtn;
