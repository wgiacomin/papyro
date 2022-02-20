import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './mockup-style'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'

const Mockup = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
              Titulo
          </Text>
          <Text style={styles.subtitle}>
              Subtitulo
          </Text>
        </View>
        <View style={styles.buttonSegment}>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Image source={circleButton} style={styles.buttonSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.login}>
            <View>
              <Text style={styles.normal}>
                Texto
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('')}
              >
                <Text style={styles.bold}>
                  Algum link
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default Mockup