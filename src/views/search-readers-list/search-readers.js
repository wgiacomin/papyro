import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import SearchEntries from './search-readers-entries'

const SearchReaders = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem está lendo?</Text>
        </View>
        <SearchEntries mocks={mocks} navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem vai ler?</Text>
        </View>
        <SearchEntries mocks={mocks} navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem já leu?</Text>
        </View>
        <SearchEntries mocks={mocks} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}
  
export default SearchReaders

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
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 33,
    marginTop: 5,
    color: '#181D2D',
  },
})

let mocks = [{
  'id': 1,
  'name': 'Wanderson R. Giacomin Junior',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'name': 'Ana Dolata',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 8,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 9,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
]


