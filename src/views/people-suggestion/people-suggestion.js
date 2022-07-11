import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import DefaultBar from '../../components/default-bar'
import safeView from '../../styles/safe-view'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import SuggestionEntries from './people-suggestion-entries'
import horizontal from '../../../assets/lines/straight.png'
import spinner from '../../styles/spinner'
import usePeopleSuggestion from './use-people-suggestion'

const PeopleSuggestion = ({ navigation }) => {
  const { profile } = useAuthState()

  const [peopleSuggestion, setPeopleSuggestion] = useState({
    peopleSuggestion: [],
    loading: true,
  })

  useEffect(() => {
    usePeopleSuggestion({ setPeopleSuggestion, profile })
  }, [])

  if (peopleSuggestion.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PeopleSuggestion')}>
            <Text style={styles.title_selected}>Pessoas</Text>
            <View style={styles.line_selected}>
              <Image source={horizontal} style={styles.selectedLine} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookSuggestion')}>
            <Text style={styles.title}>Livros</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <Image source={horizontal} style={styles.horizontalLine} />
        </View>
        <SuggestionEntries data={peopleSuggestion.peopleSuggestion} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}
  
export default PeopleSuggestion

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
    marginRight: 22
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
  'note': 'Você e Ana deram a mesma nota em 5 livros.',
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


