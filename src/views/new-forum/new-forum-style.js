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
    marginTop: -27,
    marginBottom: 25
  },
  tag_segment:{
    width: 244,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'background: rgba(236, 237, 241, 1)',
    marginLeft: 106,
    marginTop: -40,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name_input: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 27,
    color: '#AAAAAA',
    marginTop: 4,
    marginLeft: 7,
    marginRight: 5,
  },
  tag_input: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 27,
    color: '#AAAAAA',
    marginTop: 4,
    marginLeft: 7,
    marginRight: 5,
    flex: 1,
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
  book_forun_segment:{
    backgroundColor: '#000000',
    width: 125,
    height: 14,
    marginLeft: 5,
    marginTop: 4,
    marginBottom: -8
  },
  book_title:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  spoiler_forun_segment:{
    borderRadius: 50,
    backgroundColor: 'red',
    width: 53,
    height: 12,
    marginLeft: 3,
    marginTop: 3
  },
  spoiler_title:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: -1
  },
  search_segment:{
    marginRight: '3%',
  },
  search:{
    width: 16,
    height: 16
  },
})