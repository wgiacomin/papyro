import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standard: {
    marginTop: '8%',
  },
  container: {
    marginLeft: '7%',
    marginRight: '7%',
  },
  segment:{
    left: 35,
    paddingBottom: '5%',
    marginTop: -15
  },
  textSegment:{
    left: 30,
    marginTop: -15,
    width: 300
  },
  title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'left',
    color: '#181D2D',
    marginBottom: '5%',
  },
  continueSegment:{
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 104,
    height: 43.79,
    alignSelf: 'center',
    marginTop: 20
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
  normal:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,
    textAlign: 'left',
    color: '#AAAAAA',
  },
  bold:{
    marginTop: 35,
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'left',
    color: '#324A59',
    paddingBottom: 5
  },
  description:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'left',
    marginRight: 230,
    color: '#AAAAAA',
  },
  buttonSize2: {
    width: 76,
    height: 32,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  buttonSegment2:{
    marginRight: '19%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  continueSegment2:{
    marginBottom: -20,
    marginTop: -15,
  },
})