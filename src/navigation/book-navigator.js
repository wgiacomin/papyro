
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Book from '../views/books/book'

const Tab = createMaterialTopTabNavigator()

const BookNavigator = (props) => {
  const params = props.route.params.params
  return (
    <Tab.Navigator
      initialRouteName='Lendo'
      lazy={false}
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

      <Tab.Screen name="Lendo" component={Book} initialParams={{ ...params, route_type: 'reading' }} />

      <Tab.Screen name="Lidos" component={Book} initialParams={{ ...params, route_type: 'read' }} />

      <Tab.Screen name="Lerei" component={Book} initialParams={{ ...params, route_type: 'to_read' }} />

    </Tab.Navigator>
  )
}

export default BookNavigator