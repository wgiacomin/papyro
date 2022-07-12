import React, {useState, useEffect} from 'react'
import { ActivityIndicator, View, StyleSheet, TextInput, LogBox, Image, TouchableOpacity} from 'react-native'
import SearchEntries from '../search-people/search-people-entries'
import horizontal from '../../../assets/lines/straight.png'
import useSearch from './use-search-people'
import spinner from '../../styles/spinner'
import search from '../../../assets/icons/search.png'

const SearchPeople = ({ navigation }) => {
  LogBox.ignoreLogs(['Require cycle'])

  
  const [data, setData] = useState({
    page: 1,
    loading: true,
  })
  
  const [people, setPeople] = useState([])
  const [refreshing, setRefresing] = useState(false)
  
  useEffect(() => {
    useSearch({setData, page: 1, setPeople, people, data, setRefresing, refreshing})
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
          people={people} 
          setPeople={setPeople} 
          navigation={ navigation } 
          useSearch={useSearch}
          setRefresing={setRefresing}
          refreshing={refreshing}
          setData />
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
    marginLeft: 60,
    marginRight: 19
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
})