import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import BookReadEntries from './book-read-entries'
import spinner from '../../styles/spinner'
import useBookRead from './use-book-read'

const BookRead = ({ navigation }) => {
  const [bookRead, setBookRead] = useState({
    bookRead: [],
    loading: true,
  })

  useEffect(() => {
    useBookRead({ setBookRead })
  }, [])

  if (bookRead.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <BookReadEntries data={bookRead.bookRead} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}

export default BookRead

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