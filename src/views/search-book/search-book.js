import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import DefaultBar from '../../components/standart-default-bar'
import safeView from '../../styles/safe-view'
import SearchEntries from '../search-book/search-book-entries'

const SearchBook = ({ navigation }) => {
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
  
export default SearchBook

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
  'livro': 'Sankofa: A Novel',
  'autor': 'Chibundu Onuzo',
  'nota': 4,
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'livro': 'Sankofa: A Novel',
  'autor': 'Chibundu Onuzo',
  'nota': 4,
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'livro': 'Sankofa: A Novel',
  'autor': 'Chibundu Onuzo',
  'nota': 4,
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'livro': 'Sankofa: A Novel',
  'autor': 'Chibundu Onuzo',
  'nota': 4,
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'livro': 'Sankofa: A Novel',
  'autor': 'Chibundu Onuzo',
  'nota': 4,
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'livro': 'Sankofa: A Novel',
  'autor': 'Chibundu Onuzo',
  'nota': 4,
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'livro': 'Sankofa: A Novel',
  'autor': 'Chibundu Onuzo',
  'nota': 4,
  'foto': '../../../assets/icons/Nickname.png'
},
]


