import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import SearchEntries from '../search-book/search-book-entries'
import horizontal from '../../../assets/lines/straight.png'

const SearchBook = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchPeople')}>
            <Text style={styles.title}>Pessoas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchGroup')}>
            <Text style={styles.title}>Grupos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchBook')}>
            <Text style={styles.title_selected}>Livros</Text>
            <View style={styles.line_selected}>
              <Image source={horizontal} style={styles.selectedLine} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <Image source={horizontal} style={styles.horizontalLine} />
        </View>
        <SearchEntries mocks={mocks} navigation={ navigation }/>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddBook')}>
            <View style={styles.continueSegment}>
              <Text style={styles.buttonAdd}> Adicionar Novo </Text>
            </View>
          </TouchableOpacity>
        </View>
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
    marginRight: 14
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
  continueSegment:{
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 160,
    height: 32,
    alignSelf: 'center',
    marginTop: 20
  },
  buttonAdd:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '3%',
  },
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


