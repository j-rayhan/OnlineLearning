import React from 'react';
import {
    View,
    Text, 
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images, dummyData, constants } from "../../constants";
import { IconBtn } from "../../components";
import { styles } from '../styles';
const Home = () => {
  const renderHeader = () => {
    return (
      <View style={[styles.row, {marginTop: 40, marginBottom: 10, paddingHorizontal: SIZES.padding}]}>
        {/* Greeting */}
        <View style={styles.container}>
          <Text style={FONTS.h2}>HI Mr.JOHO</Text>
          <Text style={{color: COLORS.gray50, ...FONTS.body3}}>
            Friday, 17th Dec 2021
          </Text>
        </View>
        {/* Notifications */}
        <IconBtn
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    )
  }
    return (
        <View style={styles.containerWhite}>
            {/* header section */}
            {renderHeader()}
        </View>
    )
}

export default Home;