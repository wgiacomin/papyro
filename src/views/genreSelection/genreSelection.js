import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './genre-style'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'

const GenreSelection = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
              Gêneros Literários
          </Text>
          <Text style={styles.subtitle}>
              Para começar, gostaríamos de saber quais são os seus gêneros literários favoritos
          </Text>
        </View>
        <View style={styles.buttonSegment}>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Image source={circleButton} style={styles.buttonSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.skip}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('GenreSelection')}
              >
                <Text style={styles.normal}>
                  Pular?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default GenreSelection