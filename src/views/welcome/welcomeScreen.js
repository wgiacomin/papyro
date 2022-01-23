import React from 'react'
import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import circleButton from '../../../assets/buttons/circleButton.png'

const welcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.standard}>
        <View style={styles.logo}>
          <Text style={styles.title}>
            Papyro
          </Text>
        </View>
        <View style={styles.bottomLogo}>
          <Text style={styles.welcome}>
            Bem-vindo ao{'\n'}Papyro!
          </Text>
          <Text style={styles.welcomeMessage}>
            A nova rede social para leitores
          </Text>
          <TouchableOpacity
            style={styles.buttonSegment}
            onPress={() => navigation.navigate('Login')}>
            <Image source={circleButton} style={styles.buttonSize} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  standard: {
    flex: 1,
    top: 100,
  },
  segment:{
    flex: 1,
  },
  buttonSegment:{
    marginRight: '10%',
    marginBottom: '10%'
  },
  logo: {
    flex: .4,
    width: '100%',
    marginLeft: 0,
    backgroundColor: '#324A59',
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
    bottom:'5%'
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
  button:{
    alignItems: 'flex-start',
  },
  buttonSize: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  }
})

export default welcomeScreen
