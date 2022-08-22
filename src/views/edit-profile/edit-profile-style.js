import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standard: {
    flex: 1,
    marginTop: '1%',
  },
  segment:{
    paddingBottom: '5%'
  },
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center'
  },
  barSegment:{
    flexDirection: 'row',
    left: '5%',
  },
  HorizontalLine: {
    alignSelf: 'center',
    height: 1,
    width: 360,
    marginBottom: 15,
    marginTop: 2
  },
  title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 32,
    lineHeight: 48,
    marginLeft: 58,
    color: '#181D2D',
    marginTop: '-3%'
  },
  normal:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 50,
    color: '#181D2D',
    marginBottom: 6,
    marginTop: 21
  },
  bold:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 36,
    color: '#181D2D',
    marginLeft: 33,
  },
  profileSize: {
    alignSelf: 'center',
    borderRadius: 16,
    width: 164,
    height: 118,
  },
  buttonSize: {
    width: 120,
    height: 22.25,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 17
  },
  buttonSizeEdit: {
    width: 140,
    height: 25,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 27
  },
  buttonSegment:{
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },
  continueSegment:{
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 104,
    height: 43.79,
    marginRight: 33
  },
  buttonSave:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '10%',
  },
  logoutSegment:{
    borderRadius: 50,
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    width: 104,
    height: 43.79
  },
  buttonLogout:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: 'red',
    marginTop: '10%',
  },
})