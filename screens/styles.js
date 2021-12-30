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
  flexRow: {flexDirection: 'row'},
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
  iconSize17: {
    width: 17,
    height: 17,
  },
  iconSize20: {
    width: 20,
    height: 20,
  },
  iconSize25: {
    width: 25,
    height: 25,
  },
  iconSize80: {width: 80, height: 80},
  categoryCardTitleContainer: {
    position: 'absolute',
    bottom: 50,
    left: 5,
  },
  categoryCardTitle: {...FONTS.h2, color: COLORS.white, position: 'absolute'},
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
  // Profile Screen
  profileHeader: {
    marginTop: 50,
    paddingHorizontal: SIZES.padding,
  },
  profileCardContainer: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary3,
  },
  profileCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.width,
  },
  profileCardCameraSection: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profileCardCameraContainer: {
    width: 30,
    height: 30,
    marginBottom: -15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  profileCardDetailsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: SIZES.radius,
  },
  overallProgress: {flex: 1, color: COLORS.white, ...FONTS.body4},
  PCTBContentContainerStyle: {
    height: 35,
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
  profileSectionContainer: {
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.gray20,
  },
  radioBtnContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.additionalColor11,
  },
  // course Listing screen
  courseListingHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    overflow: 'hidden',
  },
  courseListingHeaderText: {
    position: 'absolute',
    bottom: 70,
    left: 30,
  },
  courseListingHeaderText2: {
    position: 'absolute',
    top: -80,
    left: 0,
    right: 0,
  },
  courseListingHeaderTitle: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.h2,
  },
  backIconContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  courseListingHeaderImage: {
    position: 'absolute',
    right: 40,
    bottom: -40,
    width: 100,
    height: 200,
  },
  filterBtnContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  // Filter modal screen
  filterModalContainer: {
    position: 'absolute',
    bottom: 0,
    height: SIZES.height,
    width: SIZES.width,
  },
  filterModalBGContainer: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.transparentBlack7,
  },
  filterModalContent: {
    position: 'absolute',
    bottom: 0,
    height: SIZES.height * 0.9,
    width: SIZES.width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
  }
});

export {styles};
