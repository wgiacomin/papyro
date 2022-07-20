import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import SuggestionEntries from './people-suggestion-entries'
import spinner from '../../styles/spinner'
import usePeopleSuggestion from './use-people-suggestion'

const PeopleSuggestion = ({ navigation }) => {
  const { profile } = useAuthState()

  const [peopleSuggestion, setPeopleSuggestion] = useState({
    peopleSuggestion: [],
    loading: true,
  })

  useEffect(() => {
    usePeopleSuggestion({ setPeopleSuggestion, profile })
  }, [])

  if (peopleSuggestion.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sugestão de Amigos</Text>
        <SuggestionEntries data={peopleSuggestion.peopleSuggestion} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}
  
export default PeopleSuggestion

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '7%',
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 27,
    marginTop: 5,
    textAlign: 'left',
    color: '#181D2D',
    marginBottom: 22
  },
})




