import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  back_button: {
    flexDirection: 'row',
    left: '6%',
  },
  HorizontalLine: {
    alignSelf: 'center',
    height: 1,
    width: 360
  },
  title: {  
    fontFamily: 'Poppins-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 27,
    color: '#181D2D',
    marginLeft: '12%',
    marginTop: 1
  },
  standard: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '5%'
  },
  description: {
    marginTop: '6%'
  },
  name: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    color: '#181D2D'
  },
  name_segment:{
    width: 244,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'background: rgba(236, 237, 241, 1)',
    marginLeft: 99,
    marginTop: -27
  },
  name_input: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 27,
    color: '#AAAAAA',
    marginTop: 4,
    marginLeft: 7,
    marginRight: 5
  },
  description_segment:{
    width: 236,
    height: 91,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'background: rgba(236, 237, 241, 1)',
    marginLeft: 99,
    marginTop: -27
  },
  description_input: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 27,
    color: '#AAAAAA',
    marginTop: 4,
    marginLeft: 7,
    marginRight: 5
  },
  button_segment:{
    alignSelf: 'center',
    marginTop: 11,
    flexDirection: 'column',
  },
  buttonSegment:{
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 316,
    height: 34,
    marginTop: 22
  },
  button:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '2.5%',
  },
})