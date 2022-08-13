import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './genre-style'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'
import progress from '../../../assets/buttons/progressGenre1.png'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import { ScrollView } from 'react-native-gesture-handler'
import spinner from '../../styles/spinner'
import useGender from './use-genre-selection'
import GenreEntries from './genre-entries'

const GenreSelection = ({ navigation }) => {

  const { profile } = useAuthState()

  const [genders, setGenders] = useState({
    genders: [],
    loading: true,
  })

  useEffect(() => {
    useGender({setGenders, profile})
  }, [])

  if (genders.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
              Gêneros Literários
          </Text>
        </View>
        <View style={styles.scrollSegment}>
          <Text style={styles.subtitle}>
              Para começar, gostaríamos de saber quais são os seus gêneros literários favoritos
          </Text>
        </View>
        <View style={styles.segment}>
          <GenreEntries data={genders.genders} navigation={navigation}/>
        </View>
        
        <View style={styles.buttonSegment}>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => {
                useGender({ setGenders, profile })
                navigation.navigate('Feed')
              }}>
              <Image source={circleButton} style={styles.buttonSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.skip}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Feed')}
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