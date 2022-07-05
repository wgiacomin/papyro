import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native'
import styles from './search-readers-list-style'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import spinner from '../../styles/spinner'
import ROUTES from '../../routes/routes'
import useSearchReadersList from './use-search-readers-list'
import SearchReadersListEntries from './search-readers-list-entries'

const SearchReadersList = ({ navigation }) => {

  const [readers, setReaders] = useState({
    readers: [],
    loading: true,
  })

  useEffect(() => {
    useSearchReadersList({ id: ROUTES.params?.id, id_status: ROUTES.params?.id_status, setReaders })
  }, [])

  if (readers.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={navigation} />
        <View style={styles.segment}>
          <Text style={styles.title}>{readers.readers.status}</Text>
        </View>
        <SearchReadersListEntries data={readers.readers.list} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}


export default SearchReadersList

