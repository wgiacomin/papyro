import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  standard: {
    flex: 1,
    top: 100,
  },
  segment: {
    flex: 1,
  },
  buttonSegment: {
    marginRight: '10%',
    marginBottom: '10%'
  },
  logo: {
    flex: .4,
    width: '100%',
    marginLeft: 0,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomLogo: {
    marginTop: '5%',
    flex: .6
  },
  title: {
    fontFamily: 'Jura',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 64,
    lineHeight: 76,
    textAlign: 'center',
    color: '#FFFFFF',
    bottom: '5%',
    textShadowColor: 'black',
    textShadowRadius: 20,
  },
  welcome: {
    flex: .3,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 28,
    lineHeight: 42,
    textAlign: 'center',
    color: '#181D2D',
  },
  welcomeMessage: {
    flex: .3,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,
    textAlign: 'center',
    color: '#AAAAAA',
  },
  button: {
    alignItems: 'flex-start',
  },
  buttonSize: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  }
})