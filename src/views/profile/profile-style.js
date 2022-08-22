import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standard: {
    flex: 1,
    marginTop: '1%',
  },
  segment:{
    paddingBottom: '5%'
  },
  book_segment:{
    paddingBottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  horizontalLine: {
    alignSelf: 'center',
    height: 1,
    width: 360,
    marginBottom: 2,
    marginTop: 20
  },
  normal:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 23,
    marginTop: -25,
    marginLeft: 35,
    color: '#000000',
  },
  user:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 23,
    lineHeight: 28,
    color: '#181D2D',
    marginBottom: 15,
    alignSelf: 'center'
  },
  imageSize: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 30,
    height: 30,
    marginTop: 1,
  },
  profileSize: {
    alignSelf: 'center',
    borderRadius: 16,
    width: 210,
    height: 220,
  },
  continueSegment:{
    flex: 1,
    marginTop: -50
  },
  buttonSegment:{
    marginLeft: '7%',
    flex: 1,
    justifyContent: 'center',
  },
})