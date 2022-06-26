import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import DefaultBar from '../../components/default-bar'
import safeView from '../../styles/safe-view'
import SearchEntries from '../search-people/search-people-entries'
import horizontal from '../../../assets/lines/straight.png'

const SearchPeople = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Image source={horizontal} style={styles.horizontalLine} />
      </View>
      <SearchEntries mocks={mocks} navigation={ navigation }/>
    </View>
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

let mocks = [{
  'id': 1,
  'name': 'Wanderson R. Giacomin Junior',
  'commom_books': '10 livros em comum',
  'commom_genre': '3 gêneros em comum',
  'note': 'Você e Ana deram a mesma nota em 5 livros.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'name': 'Ana Dolata',
  'commom_books': '10 livros em comum',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'name': 'Ana Dolata',
  'commom_books': '10 livros em comum',
  'note': 'Você e Ana deram a mesma nota em 5 livros.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'name': 'Ana Dolata',
  'commom_books': '10 livros em comum',
  'note': 'Você e Ana deram a mesma nota em 5 livros.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'name': 'Ana Dolata',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'name': 'Ana Dolata',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'name': 'Ana Dolata',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
]


