import React from 'react'
import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './welcome-style'
import circleButton from '../../../assets/buttons/circleButton.png'

const Welcome = ({ navigation }) => {
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

export default Welcome
