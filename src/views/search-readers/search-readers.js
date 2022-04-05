import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import SearchEntries from '../search-readers/search-readers-entries'

const SearchReaders = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem está lendo?</Text>
          <SearchEntries mocks={mocks} navigation={ navigation }/>
          <SearchEntries mocks={mocks} navigation={ navigation }/>
          <SearchEntries mocks={mocks} navigation={ navigation }/>
          <View style={styles.button_segment}>
            <View style={styles.footer}>
              <TouchableOpacity>
                <Text style={styles.name_title}>Ver Mais</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  line_segment: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    marginTop: 10,
    //marginBottom: -80,
    //marginRight: 252
  },
  user_image:{
    width: 29,
    height: 29,
  },
  person: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    paddingLeft: 5,
    paddingRight: 10,
    marginTop: 5,
  },
  footer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  name_title:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
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
]


