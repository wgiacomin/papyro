import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import DefaultBar from '../../components/default-bar'
import safeView from '../../styles/safe-view'
import SuggestionEntries from '../book-suggestion/book-suggestion-entries'
import horizontal from '../../../assets/lines/straight.png'

const BookSuggestion = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PeopleSuggestion')}>
            <Text style={styles.title}>Pessoas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookSuggestion')}>
            <Text style={styles.title_selected}>Livros</Text>
            <View style={styles.line_selected}>
              <Image source={horizontal} style={styles.selectedLine} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <Image source={horizontal} style={styles.horizontalLine} />
        </View>
        <SuggestionEntries mocks={mocks} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}
  
export default BookSuggestion

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
    marginLeft: 72
  },
  title_selected: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 5,
    textAlign: 'center',
    color: '#001833',
    marginLeft: 89
  },
  line_selected:{
    flex: 1,
    marginTop: 10,
    marginLeft: 75,
    marginRight: 13
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
  'livro': 'Sankofa: A Novel',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'livro': 'Harry Potter e o Enigma do Príncipe',
  'note': 'É de um gênero que você curte.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'livro': 'Romeu e Julieta',
  'note': 'Mesmo autor de um nota 5.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'livro': 'Sankofa: A Novel',
  'note': 'Mesmo autor de um nota 5.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'livro': 'Sankofa: A Novel',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'livro': 'Sankofa: A Novel',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'livro': 'Sankofa: A Novel',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
]


