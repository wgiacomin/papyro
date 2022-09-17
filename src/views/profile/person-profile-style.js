import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standard: {
    flex: 1,
    marginTop: '1%',
  },
  segment: {
    paddingBottom: '5%'
  },
  book_segment: {
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
  normal: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 23,
    marginLeft: 7,
    color: '#000000',
  },
  imageSize: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 30,
    height: 30,
    marginTop: 1
  },
  profileSize: {
    alignSelf: 'center',
    borderRadius: 16,
    width: 210,
    height: 220,
  },
  continueSegment: {
    flex: 1,
    marginTop: -50
  },
  buttonSegment: {
    marginLeft: '7%',
    flex: 1,
    justifyContent: 'center',
  },
  follow_segment: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  talk_segment: {
    flexDirection: 'row',
    marginLeft: '52%',
    marginTop: -44
  },
  followButton: {
    width: 104,
    height: 43.79,
  },
  talkButton: {
    width: 104,
    height: 47
  }
})