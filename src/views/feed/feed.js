import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, FlatList, Text } from 'react-native'
import DefaultBar from '../../components/default-bar'
import safeView from '../../styles/safe-view'
import useFeed from './use-feed'
import Entry from './entry'
import { useAuthState } from '../../context/auth-context'

const Feed = ({ navigation }) => {
  const { first_login } = useAuthState()
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState({
    page: 0,
    loading: true,
  })

  const [feed, setFeed] = useState([])

  useEffect(() => {
    if (first_login) {
      navigation.navigate('Personalize')
    }
    useFeed({ setFeed, page: 0, refreshing, setRefreshing, setData, feed, new_refresh: true })
  }, [])

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={navigation} />
        <FlatList
          data={feed}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useFeed({ setFeed, page: 0, refreshing, setRefreshing, setData, feed, new_refresh: true })
          }}
          numColumns={1}
          onEndReached={() => {
            if (feed.length > 0) {
              useFeed({ setFeed, page: data.page, refreshing, setRefreshing, setData, feed })
            }
          }}
          onEndReachedThreshold={.5}
          ListEmptyComponent={() => <Text>Sem Atualizações</Text>}
          renderItem={(post) => {
            return <Entry
              id={post.item.id}
              nickname={post.item.user.nickname}
              photo={post.item.user.photo}
              rates={post.item.rates}
              rate={post.item.rate}
              you_liked={post.item.you_liked}
              likes={post.item.likes}
              text={post.item.text}
              book_title={post.item.book.book_title}
              book_id={post.item.book.id}
              cover={post.item.book.cover}
              date={post.item.date}
              type={post.item.type}
              navigation={navigation}
              user_id={post.item.user.id}
            />
          }} />
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
