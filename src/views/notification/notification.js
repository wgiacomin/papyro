import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import NotificationEntries from '../notification/notification-entries'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useNotification from './use-notification'

const Notification = ({ navigation }) => {
  const { profile } = useAuthState()

  const [notifications, setNotifications] = useState({
    notifications: [],
    loading: true,
  })

  
  useEffect(() => {
    useNotification({setNotifications, profile})
  }, [])

  
  if (notifications.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }
  
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Notificações</Text>
        <NotificationEntries data={notifications.notifications} navigation={ navigation }/>
      </View>
    </SafeAreaView>
  )
}
  
export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '7%',
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 27,
    marginTop: 5,
    textAlign: 'left',
    color: '#181D2D',
    marginBottom: 22
  }
})