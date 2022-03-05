import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standard: {
    flex: 1,
    marginTop: '1%',
  },
  segment:{
    paddingBottom: '5%'
  },
  horizontalLine: {
    alignSelf: 'center',
    height: 1,
    width: 360,
    marginBottom: 2,
    marginTop: 20
  },
  normal:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 23,
    textAlign: 'left',
    marginLeft: 72,
    color: '#000000',
  },
  infos:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    left: 180,
    marginBottom: -14,
    color: '#000000',
  },
  bold:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'left',
    color: '#181D2D',
    marginLeft: 26
  },
  seeMore:{
    fontFamily: 'DM-Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: -0.408,
    textAlign: 'left',
    color: '#007AFF',
    marginLeft: 26,
    marginTop: 15,
    marginBottom: 30 
  },
  imageSize: {
    width: 22,
    height: 22,
    left: 150,
    flexDirection: 'row',
    top: 18
  },
  profileSize: {
    alignSelf: 'center',
    borderRadius: 16,
    width: 128,
    height: 118,
  },
  bookSize: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 41,
    height: 60,
  },
  continueSegment:{
    marginBottom: 120,
    marginTop: 20,
  },
  buttonSegment:{
    marginLeft: '6%',
    flex: 1,
    justifyContent: 'center',
  },
})