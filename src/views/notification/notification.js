import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import NotificationEntries from '../notification/notification-entries'

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <Text style={styles.title}>Notificações</Text>
        <NotificationEntries mocks={mocks} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}
  
export default Notification

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
  'text': 'Legal',
  'data': '20/05 20:00',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'text': 'Curti',
  'data': 'Ontem',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'text': 'Amanda Nogueira pediu para seguir você.',
  'data': 'Hoje',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'text': 'Legal',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'text': 'Legal',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'text': 'Legal',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'text': 'Legal',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
]


