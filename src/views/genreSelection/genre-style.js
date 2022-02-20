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
    justifyContent: 'flex-end'
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
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight:27,
    textAlign: 'center',
    color: '#324A59',
    marginLeft: 10
  },
  

})