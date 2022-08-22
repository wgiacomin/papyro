import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import spinner from '../../styles/spinner'
import ROUTES from '../../routes/routes'
import useCompany from './use-company'
import CompanyEntries from './company-entries'

const Company = ({ navigation }) => {

  const [readers, setReaders] = useState({
    readers: [],
    loading: true,
  })

  useEffect(() => {
    useCompany({ id: ROUTES.params?.id, id_status: ROUTES.params?.id_status, setReaders })
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
        <Company data={readers.readers.list} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}


export default Company

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%',
    marginTop: -25,
  },
})

