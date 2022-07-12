import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, ActivityIndicator } from 'react-native'
import DefaultBar from '../../components/default-bar'
import safeView from '../../styles/safe-view'
import FeedEntries from './feed-entries'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useFeed from './use-feed'

const Feed = ({ navigation }) => {

  const { profile } = useAuthState()

  const [feed, setFeed] = useState({
    feed: [],
    loading: true,
  })

  useEffect(() =>{
    useFeed({ profile, setFeed})
  },[])

  if (feed.loading) {
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
        <FeedEntries data={feed.feed} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
})
