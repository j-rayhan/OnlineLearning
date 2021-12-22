import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

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
  iconSize15: {
    width: 15,
    height: 15,
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
  homeHeaderContainer: {
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: SIZES.padding,
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
  sectionTitle: {flex: 1, ...FONTS.h2},
  homeSectionSeeAllBtn: {
    width: 80,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
  },
  categoryContainer: {
    width: 200,
    height: 150,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    justifyContent: 'flex-end',
  },
  imageBackgroundContainer: {
    width: 150,
    height: 120,
    marginBottom: SIZES.radius,
  },
  IBCImage: {
    position: 'absolute',
    top: 10,
    right: 20,
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
  },
  // Search Screen
  searchContainer: {
    marginTop: 100,
    paddingBottom: 300,
  },
  searchSection: {
    position: 'absolute',
    top: 50,
    height: 50,
    left: 0,
    right: 0,
    paddingHorizontal: SIZES.padding,
  },
});

export {styles};
