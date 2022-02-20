import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standard: {
    flex: 1,
    marginTop: '8%',
  },
  segment:{
    left: '10%',
    paddingBottom: '5%'
  },
  title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'center',
    color: '#181D2D',
    alignSelf: 'flex-start',
    marginBottom: '5%',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,
    textAlign: 'left',
    color: '#AAAAAA',
    alignSelf: 'flex-start',
    marginLeft: 2,
    marginRight: 78,
  },
  buttonSize: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  buttonSegment:{
    marginRight: '10%',
    marginBottom: '10%',
    flex: 1,
    justifyContent: 'center'
  },
  continueSegment:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: '13%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  skip:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginLeft: '10%',
    marginBottom: '10%',
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
    marginTop: 30,
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'left',
    color: '#324A59',
  },
  description:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'left',
    marginRight: 215,
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
    flex: 1,
    justifyContent: 'center',
  },
  continueSegment2:{
    marginBottom: 15,
    marginTop: 20,
  },
  progress:{
    width: 70,
    height: 8,
    marginTop: 25,
    flexDirection: 'row',
    alignSelf: 'center',
  }
})