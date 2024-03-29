import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, FlatList, Text } from 'react-native'
import safeView from '../../styles/safe-view'
import useFollowing from './use-followers'
import Entry from './entry'

const Following = ({ navigation, route }) => {
  const route_type = route.params.route_type
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState({
    page: 0,
    loading: true,
  })

  const [following, setFollowing] = useState([])

  useEffect(() => {
    useFollowing({ setFollowing, page: 0, refreshing, setRefreshing, setData, following, route_type, id: route.params?.id })
  }, [])

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <FlatList
          data={following}
          numColumns={1}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useFollowing({ setFollowing, page: 0, refreshing, setRefreshing, setData, following, new_refresh: true, route_type, id: route.params?.id })
          }}
          onEndReached={() => {
            if (following.length % 16 == 0 & following.length > 0) {
              useFollowing({ setFollowing, page: data.page, refreshing, setRefreshing, setData, following, route_type, id: route.params?.id })
            }
          }}
          onEndReachedThreshold={.5}
          ListEmptyComponent={() => <Text>Não há nada aqui.</Text>}
          renderItem={(post) => {
            return <Entry
              nickname={post.item.nickname}
              photo={post.item.photo}
              navigation={navigation}
              id={post.item.id}
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

