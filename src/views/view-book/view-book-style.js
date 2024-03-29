import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standart: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  segment:{
    left: '1%',
    paddingBottom: '3%',
    paddingTop: '3%',
  },
  gender_title: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    color: '#181D2D',
  },
  underline: {
    textDecorationLine: 'underline'
  },
  share_segment: {
    flexDirection: 'row-reverse',
    marginTop: -20,    
  },
  shareButton: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  book_segment: {
    marginLeft: '1%',
    flexDirection: 'row',
    flex: 1
  },
  book_title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 25,
    color: '#181D2D',
    marginLeft: '3%',
    marginTop: '3%',
    marginRight: 100,
  },
  book_autor: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 21,
    color: '#181D2D',
    marginLeft: '3%',
    marginTop: '-1%',
  },
  unselected: {
    margin: 5,
  },
  selected: {
    backgroundColor: 'black',
    margin: 6,
    padding: 10,
    borderRadius: 10,
  },
  star:{
    width: 20,
    height: 20,
  },
  star_comments:{
    width: 12,
    height: 12,
  },
  star_container_avaliation: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: '3%'
  },
  star_container_comments: {
    flexDirection: 'row',
    marginTop: -23,
    marginLeft: 48,
    marginBottom: 10
  },
  star_number: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#181D2D',
    marginTop: -22,
    marginLeft: 145
  },
  bookImage:{
    width: 94,
    height: 140,
    marginTop: 15,
    marginBottom: 15,
  },
  bookBackground:{
    alignSelf: 'center',
    width: 405,
    height: 290,
    marginTop: 12,
    marginBottom: 15,
  },
  resume_segment:{
    left: '1%',
    paddingBottom: '5%',
    marginTop: 25
  },
  resume: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    textAlign: 'left',
    marginLeft: 3,
    marginRight: 3
  },
  want_to_read_container: {
    margin: 15,
    marginBottom: 20,
    flex: 1,
    alignItems: 'center'
  },
  want_to_read: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    width: 121,
    height: 31,
    backgroundColor: '#324A59',
    color: 'white',
    borderColor: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    textAlign: 'center',
  },
  want_to_read_list: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    width: 120,
    height: 30,
    textAlign: 'center',
    marginTop: 4,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    color: 'black'
  },
  star_container_resume: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: 120
  },
  star_number_resume: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#181D2D',
    paddingTop: 7,
    marginBottom: 10,
    marginRight: 55
  },
  line:{
    flex: 1,
    marginTop: 5,
    marginBottom: 5
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
  },
  title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 24,
    color: '#181D2D',
    textAlign: 'center',
    marginTop: -20,
  },
  comments_title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 24,
    color: '#181D2D',
    textAlign: 'center',
    marginTop: 13,
    paddingBottom: 13
  },
  company: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5
  },
  person_image:{
    width: 22,
    height: 22,
    marginLeft: 120
  },
  company_title: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
    textAlign: 'center',
    marginLeft: 6,
  },
  avaliations:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    marginBottom: 12
  },
  person_subtitle: {  
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    color: '#000000',
    marginLeft: 121
  },
  user_image:{
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5
  },
  comment_title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    marginTop: 10,
  },
  person: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 15
  },
  edit_segment: {
    flex: 1,
    marginBottom: -20,  
    alignSelf: 'flex-end'  
  },
  editButton: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  post_type:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 27,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  data: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icons: {
    width: 20,
    height: 20
  },
  icon_text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
    paddingLeft: 5,
    paddingRight: 15
  },
  book_image: {
    maxWidth: 80,
    resizeMode: 'contain',
    marginLeft: 10
  },
  container_book: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  container_book_title:{
    flex: 1,
    alignItems: 'center',
    marginTop: 15
  },
  book_subtitle: {
    fontFamily: 'Poppins',
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: 10
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 5,
    marginLeft: 50,
  },
  like_and_comments: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  date:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
  see_more:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 22,
    color: '#007AFF',
    paddingLeft: 7,
  },
  book_description:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
  },
  book_description_container:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 50
  },
  
})