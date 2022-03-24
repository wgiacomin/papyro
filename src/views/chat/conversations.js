import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import ChatBar from '../../components/chat-bar'
import safeView from '../../styles/safe-view'
import ConversationEntries from './conversation-entries'

const Conversation = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <ChatBar navigation={ navigation }/>
        <Text style={styles.title}>Conversas</Text>
        <ConversationEntries mocks={mocks} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}

export default Conversation

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
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    textAlign: 'left',
    marginLeft: 10,
    color: '#001833'
  }
})

let mocks = [{
  'id': 1,
  'nome': 'Ana Dolata',
  'text': 'Legal',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'nome': 'Ana Dolata',
  'text': 'Não concordo com você, Ana',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'nome': 'Ana Dolata',
  'text': 'Não concordo com você, Ana',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'nome': 'Ana Dolata',
  'text': 'Não concordo com você, Ana',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'nome': 'Ana Dolata',
  'text': 'Não concordo com você, Ana',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'nome': 'Ana Dolata',
  'text': 'Não concordo com você, Ana',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'nome': 'Ana Dolata',
  'text': 'Não concordo com você, Ana',
  'foto': '../../../assets/icons/Nickname.png'
},
]




