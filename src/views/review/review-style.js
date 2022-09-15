import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '7%',
    justifyContent: 'center',
  },
  segment: {
    left: '1%',
    paddingBottom: '3%',
    marginTop: 15
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 33,
    color: '#181D2D',
  },
  image_segment: {
    paddingTop: 23,
    paddingLeft: 37,
    paddingBottom: 19
  },
  book_segment: {
    left: '1%',
    paddingBottom: '6%',
    backgroundColor: '#ECEDF1',
    marginTop: 10,
    marginRight: '-10%',
    marginLeft: '-10%',
  },
  book_title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 33,
    color: '#181D2D',
    textAlign: 'center',
    marginLeft: 110,
    marginRight: 20,
    marginTop: -120
  },
  book_autor: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    color: '#181D2D',
    textAlign: 'center',
    marginLeft: 120,
    marginRight: 20,
    marginTop: -6
  },
  star: {
    width: 26,
    height: 26,
  },
  star_comments: {
    width: 12,
    height: 12,
  },
  star_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    marginTop: 4,
    alignSelf: 'center',
    marginLeft: 60,
  },
  star_number: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 19,
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 28,
    marginLeft: 20
  },
  bookImage: {
    width: 68,
    height: 102
  },
  comment_segment: {
    marginLeft: '-3%',
    marginRight: '-3%',
    width: 340,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(243, 243, 245, 0.72)',
    marginTop: 26,
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  },
  comment: {
    width: 300,
    height: 300,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 27,
    color: 'black',
    marginTop: 9,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    textAlignVertical: 'top'
  },
  max_length: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 21,
    color: '#AAAAAA',
    textAlign: 'right',
    marginRight: 22
  },
  buttonSegment: {
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },
  buttonSaveSegment: {
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 104,
    height: 43.79,
    marginRight: 33
  },
  buttonSave: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '10%',
  },
  buttonCancelSegment: {
    borderRadius: 50,
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    width: 104,
    height: 43.79
  },
  buttonCancel: {
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