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
    paddingBottom: '1%',
  },
  people_segment: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 33,
    marginTop: 5,
    color: '#181D2D',
  },
  user_image: {
    width: 50,
    height: 50,
  },
  person: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 17,
    paddingLeft: 10,
    marginTop: 15,
  },
  see_more: {
    fontFamily: 'DM-Sans',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    color: '#007AFF',
  },
  see_more_segment: {
    alignItems: 'center',
    marginBottom: 12,
    paddingTop: 5
  }
})