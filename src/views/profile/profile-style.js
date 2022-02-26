import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standard: {
    flex: 1,
    marginTop: '1%',
  },
  segment:{
    paddingBottom: '5%'
  },
  title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 32,
    lineHeight: 48,
    textAlign: 'center',
    right: '6%',
    color: '#181D2D',
  },
  normal:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 23,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 73
  },
  infos:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    left: 180,
    color: '#000000',
  },
  bold:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'left',
    color: '#181D2D',
    marginLeft: 26
  },
  seeMore:{
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'left',
    color: '#007AFF',
    marginLeft: 26
  },
  buttonEdit: {
    left: 320,
    width: 20,
    height: 20,
    flexDirection: 'row',
  },
  buttonMsg: {
    left: 350,
    width: 25,
    height: 25,
    flexDirection: 'row'
  },
  imageSize: {
    width: 22,
    height: 22,
    left: 150,
    flexDirection: 'row',
    top: 18
  },
  profileSize: {
    alignSelf: 'center',
    borderRadius: 16,
    width: 128,
    height: 118,
  },
  bookSize: {
    alignSelf: 'flex-start',
    width: 41,
    height: 60,
    marginLeft: 26
  }
  

})