import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import search from '../../../assets/icons/search.png'
import useSearch from './use-search-book'
import Entry from './entry'

const SearchBook = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState({
    page: 0,
    loading: true,
  })

  const [books, setBooks] = useState([])
  const [term, setTerm] = useState(route.params?.term)

  useEffect(() => {
    useSearch({ setData, page: 0, setBooks, books, data, setRefreshing, refreshing, term, new_refresh: true })
  }, [])


  return (
    <>
      <View style={styles.search_segment}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Digite para pesquisar...'
          style={styles.textInput}
          autoCompleteType='name'
          value={term}
          onChangeText={text => setTerm(text)}
        />
        <TouchableOpacity style={styles.search_segment_click}
          onPress={() => {
            setData({ page: 0, loading: true, })
            useSearch({ setBooks, page: 0, refreshing, setRefreshing, setData, books, new_refresh: true, term })
          }}
        >
          <Image source={search} style={styles.search} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.line}>
          <Image source={horizontal} style={styles.horizontalLine} />
        </View>
        <FlatList
          data={books}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => {
            if (books.length % 16 == 0 & books.length > 0) {
              useSearch({ setData, data, setBooks, books, page: data.page, refreshing, setRefreshing, term })
            }
          }}
          onEndReachedThreshold={.1}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useSearch({ setBooks, page: 0, refreshing, setRefreshing, setData, books, new_refresh: true, term })
          }}
          ListEmptyComponent={() => <Text>Nenhum resultado!</Text>}
          renderItem={(post) => {
            return <Entry
              name={post.item.book_title}
              cover={post.item.cover}
              author={post.item.author[0]}
              rate={post.item.rate}
              book_id={post.item.id}
              navigation={navigation}
            />
          }} />
      </View>
    </>
  )
}

export default SearchBook

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '5%',
    marginBottom: '5%'
  },
  search: {
    width: 20,
    height: 20
  },
  segment: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 5,
    textAlign: 'center',
    color: '#D8D8D8',
    paddingLeft: 65
  },
  title_selected: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 5,
    textAlign: 'center',
    color: '#001833',
    paddingLeft: 95
  },
  textInput: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 10,
    alignSelf: 'center',
    letterSpacing: -0.2,
    height: 40,
    flex: 1
  },
  search_segment: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  search_segment_click: {
    marginRight: '5%'
  },
  line_selected: {
    flex: 1,
    marginTop: 10,
    marginLeft: 80,
    marginRight: 12
  },
  selectedLine: {
    width: '163%',
    backgroundColor: '#324A59',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  line: {
    flex: 1,
    marginTop: 1,
    marginBottom: 10
  },
  horizontalLine: {
    width: '100%',
    marginLeft: 0,
    height: 1,
    marginBottom: 10
  },
  continueSegment: {
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 160,
    height: 32,
    alignSelf: 'center',
    marginTop: 20
  },
  buttonAdd: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '3%',
  },
})