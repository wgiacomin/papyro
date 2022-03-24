import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import DefaultBar from '../../components/standart-default-bar'
import safeView from '../../styles/safe-view'
import SearchEntries from '../search-people/search-people-entries'
import horizontal from '../../../assets/lines/straight.png'

const SearchPeople = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchPeople')}>
            <Text style={styles.title_selected}>Pessoas</Text>
            <View style={styles.line_selected}>
              <Image source={horizontal} style={styles.selectedLine} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchGroup')}>
            <Text style={styles.title}>Grupos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchBook')}>
            <Text style={styles.title}>Livros</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <Image source={horizontal} style={styles.horizontalLine} />
        </View>
        <SearchEntries mocks={mocks} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}
  
export default SearchPeople

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
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
    paddingLeft: 45
  },
  title_selected: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 5,
    textAlign: 'center',
    color: '#001833',
    paddingLeft: 50
  },
  line_selected:{
    flex: 1,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 21
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
  'name': 'Ana Dolata',
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


