
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BookRead from '../views/book-read/book-read'
import BookReading from '../views/book-reading/book-reading'
import BookToRead from '../views/book-to-read/book-to-read'

const Tab = createMaterialTopTabNavigator()

const BookNavigator = () => (
  <Tab.Navigator
    initialRouteName='Lendo'
    screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarActiveBackgroundColor: '#ededed',
      tabBarInactiveBackgroundColor: '#dcdcdc',
      tabBarStyle: [
        {
          display: 'flex',
          margin: 0,
          padding: 0
        },
        null
      ]
    }}
  >

    <Tab.Screen name="Lendo" component={BookReading} />

    <Tab.Screen name="Lidos" component={BookRead} />

    <Tab.Screen name="Lerei" component={BookToRead} />

  </Tab.Navigator>
)

export default BookNavigator