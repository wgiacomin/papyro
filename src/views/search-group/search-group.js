import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import DefaultBar from '../../components/standart-default-bar'
import safeView from '../../styles/safe-view'
import SearchEntries from '../search-group/search-group-entries'

const SearchGroup = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <Text style={styles.title}>Pessoas  Grupos  Livros</Text>
        <SearchEntries mocks={mocks} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}
  
export default SearchGroup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 27,
    marginTop: 5,
    textAlign: 'left',
    color: '#181D2D'
  }
})

let mocks = [{
  'id': 1,
  'group': 'Sankofa Group',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'group': 'Emily Bronte Group',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'group': 'Sankofa Group',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'group': 'Sankofa Group',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'group': 'Sankofa Group',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'group': 'Sankofa Group',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'group': 'Sankofa Group',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
]


