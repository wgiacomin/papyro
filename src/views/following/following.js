import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, FlatList } from 'react-native'
import safeView from '../../styles/safe-view'
import useFollowing from './use-following'
import Entry from './entry'

const Following = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState({
    page: 0,
    loading: true,
  })

  const [following, setFollowing] = useState([])

  useEffect(() => {
    useFollowing({ setFollowing, page: 0, refreshing, setRefreshing, setData, following })
  }, [])

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          numColumns={1}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useFollowing({ setFollowing, page: 0, refreshing, setRefreshing, setData, following, new_refresh: true })
          }}
          onEndReached={() => useFollowing({ setFollowing, page: data.page, refreshing, setRefreshing, setData, following })}
          onEndReachedThreshold={7}
          renderItem={(post) => {
            return <Entry
              nickname={post.item.nickname}
              photo={post.item.photo}
              navigation={navigation}
            />
          }}
        />
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

