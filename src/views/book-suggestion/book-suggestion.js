import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, FlatList } from 'react-native'
import safeView from '../../styles/safe-view'
import useBookSuggestion from './use-book-suggestion'
import Entry from './entry'

const BookSuggestion = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState({
    page: 0,
    loading: true,
  })

  const [bookSuggestion, setBookSuggestion] = useState([])

  useEffect(() => {
    useBookSuggestion({ setBookSuggestion, page: 0, refreshing, setRefreshing, setData, bookSuggestion, new_refresh: true })
  }, [])

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sugestão de Livros</Text>
        <FlatList
          data={bookSuggestion}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useBookSuggestion({ setBookSuggestion, page: 0, refreshing, setRefreshing, setData, bookSuggestion, new_refresh: true })
          }}
          onEndReached={() => useBookSuggestion({ setBookSuggestion, page: data.page, refreshing, setRefreshing, setData, bookSuggestion })}
          onEndReachedThreshold={.66}
          ListEmptyComponent={() => <Text>Sem Indicações</Text>}
          numColumns={1}
          renderItem={(post) => {
            return <Entry
              name={post.item.book_title}
              rate={post.item.rate}
              cover={post.item.cover}
              author={post.item.author[0]}
              navigation={navigation}
            />
          }} />
      </View>
    </SafeAreaView>
  )
}

export default BookSuggestion

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '7%',
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 27,
    marginTop: 5,
    textAlign: 'left',
    color: '#181D2D',
    marginBottom: 22
  },
})
