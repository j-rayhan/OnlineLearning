import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {SIZES} from '../constants';

const VCCard = ({containerStyle, course}) => {
  return (
    <TouchableOpacity style={{width: 270, ...containerStyle}}>
      {/* Image section */}
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />
      {/* Detail section */}
    </TouchableOpacity>
  );
};
export default VCCard;
