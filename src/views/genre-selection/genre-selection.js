import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './genre-style'
import BackButton from '../../components/back-button'
import { useAuthState } from '../../context/auth-context'
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
        <GenreEntries data={genders.genders} navigation={navigation}/>
      </View>  
    </SafeAreaView>
  )
}


export default GenreSelection