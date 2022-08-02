import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import safeView from '../../styles/safe-view'
import spinner from '../../styles/spinner'
import ROUTES from '../../routes/routes'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import useFollowers from './use-followers'
import FollowersEntries from './followers-entries'

const Followers = ({ navigation }) => {

  const { profile } = useAuthState()

  const [followers, setFollowers] = useState({
    followers: [],
    loading: true,
  })

  useEffect(() => {
    useFollowers({ setFollowers, profile })
  }, [])

  if (followers.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <FollowersEntries data={followers.followers} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}


export default Followers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  segment: {
    left: '1%',
    paddingBottom: '1%',
    marginTop: 2,
    marginBottom: -20
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
  },
  see_more: {
    fontFamily: 'DM-Sans',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    color: '#007AFF',
  },
  see_more_segment: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    paddingTop: 5
  }
})

