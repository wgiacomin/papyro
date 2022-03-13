import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import DefaultBar from '../../components/default-bar'
import safeView from '../../styles/safe-view'
import BookReadingEntries from './book-reading-entries'

const BookToRead = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <Text style={styles.title}>Livros que Estou Lendo</Text>
        <BookReadingEntries mocks={mocks} navigation={ navigation }/>
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
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'book': 'O morro dos ventos uivantes',
  'autor': 'Emily Bronte',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'book': 'Admiravel mundo novo',
  'autor': 'Aldous Huxley',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'book': 'O morro dos ventos uivantes',
  'autor': 'Emily Bronte',
  'foto': '../../../assets/icons/Nickname.png'
},
]




