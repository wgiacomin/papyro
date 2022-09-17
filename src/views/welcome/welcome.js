import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './welcome-style'
import circleButton from '../../../assets/buttons/circleButton.png'
import logo from '../../../assets/logo.png'

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.standard}>
        <ImageBackground source={logo} resizeMode="cover" style={styles.logo}>
          <Text style={styles.title}>
            Papyro
          </Text>
        </ImageBackground>
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

export default Welcome
