import React from 'react'
import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../components/styles/safe-view'
import circleButton from '../../../assets/buttons/circleButton.png'

const welcomeScreen = () => {
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
          <TouchableOpacity style={styles.circleButton}>
            <Image source={circleButton} style={styles.imageSize}/>
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
  logo: {
    flex: .4,
    width: '100%',
    left: 0,
    backgroundColor: '#324A59',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomLogo: {
    top: '5%',
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
    flex: .5,
    alignItems: 'flex-start',
  },
  imageSize: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    right: '50%',
    bottom: '10%'
  }
})

export default welcomeScreen
