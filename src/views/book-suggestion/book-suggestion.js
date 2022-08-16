import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import { useAuthState } from '../../context/auth-context'
import SuggestionEntries from '../book-suggestion/book-suggestion-entries'
import spinner from '../../styles/spinner'
import useBookSuggestion from './use-book-suggestion'

const BookSuggestion = ({ navigation }) => {
  const { profile } = useAuthState()

  const [bookSuggestion, setBookSuggestion] = useState({
    bookSuggestion: [],
    loading: true,
  })

  useEffect(() => {
    useBookSuggestion({ setBookSuggestion, profile })
  }, [])

  if (bookSuggestion.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sugestão de Livros</Text>
        <SuggestionEntries data={bookSuggestion.bookSuggestion} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}

export default BookSuggestion

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
