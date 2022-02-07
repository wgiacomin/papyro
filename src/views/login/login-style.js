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
  backSegment:{
    left: '7%',
    marginTop: '2%'
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
    textAlign: 'center',
    color: '#AAAAAA',
    alignSelf: 'flex-start',
  },
  imageSize: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  forgetPass: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight:27,
    textAlign: 'center',
    color: '#324A59',
    marginTop: '1%'
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
    justifyContent: 'flex-end'
  },
  signup:{
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
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight:27,
    textAlign: 'center',
    color: '#324A59',
    marginLeft: 10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    fontFamily: 'Poppins-Bold',
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 0.38,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
    letterSpacing: 0.38,
    fontStyle: 'normal',
    lineHeight: 24,
  },
})
  