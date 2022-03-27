import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import StandartDefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import MyGroupsEntries from './my-groups-entries'

const BookToRead = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <StandartDefaultBar navigation={ navigation }/>
        <Text style={styles.title}>Meus Grupos</Text>
        <View style={styles.continueSegment}>
          <TouchableOpacity
            onPress={() => navigation.navigate('People')}>
            <Text style={styles.buttonSize}> Criar </Text>
          </TouchableOpacity>
        </View>
        <MyGroupsEntries mocks={mocks} navigation={ navigation }/>
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
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 33,
    fontWeight: '500',
    textAlign: 'left',
    color: '#181D2D',
    marginBottom: 22
  },
  continueSegment:{
    borderRadius: 50,
    backgroundColor: '#324A59',
    width: 104.26,
    height: 32,
    alignSelf: 'flex-end',
    marginTop: -53
  },
  buttonSize:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 7
  },
})

let mocks = [{
  'id': 1,
  'group': 'Sankofa Group',
  'description': 'e outros 217 Membros',
  'amigo_um': '../../../assets/icons/Nickname.png',
  'amigo_dois': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'group': 'Emily Bronte Group',
  'description': 'e outros 217 Membros',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'group': 'Aldous Huxley Group',
  'description': 'e outros 217 Membros',
  'amigo_um': '../../../assets/icons/Nickname.png',
  'amigo_dois': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'group': 'Leitores CWB',
  'description': 'e outros 217 Membros',
  'foto': '../../../assets/icons/Nickname.png'
},
]




