import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import BookToReadEntries from './book-to-read-entries'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useBookToRead from './use-book-to-read'

const BookToRead = ({ navigation}) => {

  const { profile } = useAuthState()

  const [bookToRead, setBookToRead] = useState({
    bookToRead: [],
    loading: true,
  })

  useEffect(() => {
    useBookToRead({ setBookToRead, profile })
  }, [])

  if (bookToRead.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <Text style={styles.title}>Livros Para Ler</Text>
        <BookToReadEntries data={bookToRead.bookToRead} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}

export default BookToRead

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 33,
    fontWeight: '500',
    textAlign: 'left',
    color: '#181D2D',
    marginBottom: 22
  }
})
