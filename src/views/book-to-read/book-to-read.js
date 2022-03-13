import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import DefaultBar from '../../components/default-bar'
import safeView from '../../styles/safe-view'
import BookToReadEntries from './book-to-read-entries'

const BookToRead = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar/>
        <Text style={styles.title}>Livros Para Ler</Text>
        <BookToReadEntries mocks={mocks} />
      </View>
    </SafeAreaView>
  )
}

export default BookToRead

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
    fontSize: 22,
    lineHeight: 33,
    fontWeight: '500',
    textAlign: 'left',
    color: '#181D2D',
    marginBottom: 22
  }
})

let mocks = [{
  'id': 1,
  'book': 'Sankofa: A Novel',
  'autor': 'Chibundu Onuzo',
  'nota': 4,
  'avaliacoes': 402,
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'book': 'O morro dos ventos uivantes',
  'autor': 'Emily Bronte',
  'nota': 3,
  'avaliacoes': 325,
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'book': 'Admiravel mundo novo',
  'autor': 'Aldous Huxley',
  'nota': 3,
  'avaliacoes': 436,
  'foto': '../../../assets/icons/Nickname.png'
},
]




