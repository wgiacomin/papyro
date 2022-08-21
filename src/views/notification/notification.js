import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, FlatList } from 'react-native'
import safeView from '../../styles/safe-view'
import useNotification from './use-notification'
import Entry from './entry'

const Notification = ({ navigation }) => {
  const [notifications, setNotifications] = useState({
    notifications: [],
    loading: true,
  })


  useEffect(() => {
    useNotification({ setNotifications })
  }, [])


  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Notificações</Text>
        <FlatList
          data={notifications.notifications}
          refreshing={notifications.loading}
          onRefresh={() => {
            setNotifications({ loading: true })
            useNotification({ setNotifications })
          }}
          ListEmptyComponent={() => <Text>Não há nada aqui.</Text>}
          numColumns={1}
          renderItem={(post) => {
            return <Entry
              navigation={navigation}
              data={post.item}
            />
          }} />
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