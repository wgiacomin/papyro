
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Book from '../views/books/book'

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

    <Tab.Screen name="Lendo" component={Book} initialParams={{ route_type: 'reading' }} />

    <Tab.Screen name="Lidos" component={Book} initialParams={{ route_type: 'read' }} />

    <Tab.Screen name="Lerei" component={Book} initialParams={{ route_type: 'to_read' }} />

  </Tab.Navigator>
)

export default BookNavigator