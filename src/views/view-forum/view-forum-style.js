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
    marginTop: '3%'
  },
  name: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    color: '#181D2D'
  },
  book_container: {
    flex: 1,
    paddingTop: 0,
    marginTop: 5,
    marginLeft: 5,
  },
  bookImage:{
    width: 59,
    height: 91,
  },
  book_segment: {
    flex: 1,
    marginTop: -88,
    marginLeft: 65,
    flexDirection: 'column',
  },
  book_title: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 23,
    color: '#000000',
    marginTop: -7
  },
  book_data: {  
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 11,
    color: '#000000',
    marginLeft: 2,
    marginTop: -3
  },
  book_desc: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 19,
    color: '#000000',
    marginTop: 7,
  },
  mocks_container:{
    backgroundColor: '#F4F4F4',
    width: 346,
    height: 80,
    marginBottom: 6
  },
  comment_title: {
    flex: 1,
    paddingBottom: 5,
    marginTop: 10,
  },  
  forun_title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 23,
    marginLeft: 5,
    marginTop: -8
  },
  tag_segment:{
    flex: 1,
    flexDirection: 'row',
  },
  book_forun_segment:{
    backgroundColor: '#000000',
    width: 125,
    height: 14,
    marginLeft: 5,
  },
  book_title_mocks:{
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
    marginLeft: 3
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
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15
  },
  user: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
    marginLeft: 3,
    marginTop: 10
  },
  button_segment:{
    alignSelf: 'center',
    marginTop: 11,
    flexDirection: 'column',
    marginBottom: 20
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  icons: {
    width: 14,
    height: 14
  },
  icon_text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
    paddingLeft: 5,
    paddingRight: 15
  },
  like_and_comments: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 5,
    marginTop: -8
  },
  buttonSegment:{
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 316,
    height: 34,
    marginTop: 65
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