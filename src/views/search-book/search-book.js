import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ActivityIndicator, LogBox } from 'react-native'
import SearchEntries from '../search-book/search-book-entries'
import horizontal from '../../../assets/lines/straight.png'
import search from '../../../assets/icons/search.png'
import useSearch from './use-search-book'
import spinner from '../../styles/spinner'

const SearchBook = ({ navigation }) => {
  LogBox.ignoreLogs(['Require cycle'])

  const [data, setData] = useState({
    page: 1,
    loading: true,
  })

  const [books, setBooks] = useState([])
  const [refreshing, setRefresing] = useState(false)

  useEffect(() => {
    useSearch({setData, page: 1, setBooks, books, data, setRefresing, refreshing})
  }, [])

  
  if (data.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <>
      <View style={styles.search_segment}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Digite para pesquisar...'
          style={styles.textInput}
          autoCompleteType='name'
        />
        <TouchableOpacity style={styles.search_segment_click}
          onPress={() => useSearch(setData)}
        >
          <Image source={search} style={styles.search}/>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.line}>
          <Image source={horizontal} style={styles.horizontalLine} />
        </View>
        <SearchEntries data={data} 
          books={books} 
          setBooks={setBooks} 
          navigation={ navigation } 
          useSearch={useSearch}
          setRefresing={setRefresing}
          refreshing={refreshing}
          setData />         
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
  search:{
    width: 20,
    height: 20
  },
  segment:{
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
  search_segment:{
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  search_segment_click:{
    marginRight: '5%'
  },
  line_selected:{
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
  line:{
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
  continueSegment:{
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 160,
    height: 32,
    alignSelf: 'center',
    marginTop: 20
  },
  buttonAdd:{
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