import React, { useState } from 'react'
import { View, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, Text } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import useSearch from './use-search-people'
import search from '../../../assets/icons/search.png'
import Entry from './entry'

const SearchPeople = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState({
    page: 0,
    loading: false,
  })

  const [people, setPeople] = useState([])
  const [term, setTerm] = useState(null)


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
            useSearch({ setPeople, page: 0, refreshing, setRefreshing, setData, people, new_refresh: true, term })
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
          data={people}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => useSearch({ setData, data, setPeople, people, page: data.page, refreshing, setRefreshing, term })}
          onEndReachedThreshold={.1}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useSearch({ setPeople, page: 0, refreshing, setRefreshing, setData, people, new_refresh: true, term })
          }}
          ListEmptyComponent={() => <Text>Nenhum resultado!</Text>}
          renderItem={(post) => {
            return <Entry
              name={post.item.nickname}
              commom_books={post.item.common_books}
              commom_genre={post.item.common_genre}
              image={post.item.photo}
              navigation={navigation}
            />
          }} />
      </View>
    </>
  )
}

export default SearchPeople

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '5%',
    marginBottom: '5%'
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
    paddingLeft: 85
  },
  title_selected: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 5,
    textAlign: 'center',
    color: '#001833',
    paddingLeft: 75
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
    marginLeft: 60,
    marginRight: 19
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
})