import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  segment: {
    left: '1%',
    paddingBottom: '3%',
    marginTop: 15
  },
  people_segment: {
    flexDirection: 'row',
    marginTop: 15,
    marginRight: 252
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 33,
    marginTop: 5,
    color: '#181D2D',
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 21,
    color: '#181D2D',
  },
  user_image: {
    width: 29,
    height: 29,
  },
  person: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    paddingLeft: 5,
    paddingRight: 10,
    marginTop: 5,
  },
  see_more: {
    fontFamily: 'DM-Sans',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 22,
    color: '#007AFF',
  },
  see_more_segment: {
    alignSelf: 'center',
    marginTop: 12
  }
})