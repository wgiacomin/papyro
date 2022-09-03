import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, FlatList } from 'react-native'
import safeView from '../../styles/safe-view'
import useBook from './use-book'
import Entry from './entry'

const BookRead = ({ navigation, route }) => {
  const route_type = route.params.route_type
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState({
    page: 0,
    loading: true,
  })
  const [book, setBook] = useState([])

  useEffect(() => {
    useBook({ setBook, page: 0, refreshing, setRefreshing, setData, book, new_refresh: true, route_type, id: route.params?.id })
  }, [])

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <FlatList
          data={book}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useBook({ setBook, page: 0, refreshing, setRefreshing, setData, book, new_refresh: true, route_type, id: route.params?.id })
          }}
          onEndReached={() => useBook({ setBook, page: data.page, refreshing, setRefreshing, setData, book, route_type, id: route.params?.id })}
          onEndReachedThreshold={.5}
          ListEmptyComponent={() => <Text>Não há nada aqui.</Text>}
          numColumns={1}
          renderItem={(post) => {
            return <Entry
              author={post.item.author[0]}
              rate={post.item.rate}
              cover={post.item.cover}
              title={post.item.book_title}
              id={post.item.id}
              navigation={navigation}
            />
          }} />
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