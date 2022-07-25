import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import BookToReadEntries from './book-to-read-entries'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useBookToRead from './use-book-to-read'
import BackButton from '../../components/back-button'

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
  back_button: {
    paddingRight: 10,
    marginTop: 10
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 33,
    color: '#181D2D',
    marginBottom: 22,
    marginLeft: 35,
    marginTop: -30
  }
})
