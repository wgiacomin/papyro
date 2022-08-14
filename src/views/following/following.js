import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import safeView from '../../styles/safe-view'
import spinner from '../../styles/spinner'
import ROUTES from '../../routes/routes'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import useFollowing from './use-following'
import FollowingEntries from './following-entries'

const Following = ({ navigation }) => {

  const { profile } = useAuthState()

  const [following, setFollowing] = useState({
    following: [],
    loading: true,
  })

  useEffect(() => {
    useFollowing({ setFollowing, profile })
  }, [])

  if (following.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <FollowingEntries data={following.following} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}


export default Following

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%',
    marginTop: -25
  },
})

