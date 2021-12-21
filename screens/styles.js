import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpread: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {alignItems: 'center'},
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  iconSize20: {
    width: 20,
    height: 20,
  },
  iconSize25: {
    width: 25,
    height: 25,
  },
  // home screen styles
  tabIndicator: {
    position: 'absolute',
    left: 0,
    height: '100%',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  learningBG: {
    alignItems: 'flex-start',
    padding: SIZES.padding / 2,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
  },
  learningImg: {
    width: '100%',
    height: 110,
    marginTop: SIZES.padding,
  },
  startLearningText: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
});

export {styles};
