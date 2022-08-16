
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchReadersList from '../views/search-readers-list/search-readers-list'

const Tab = createMaterialTopTabNavigator()


const PeopleNavigator = () => (
  <Tab.Navigator
    initialRouteName='Já Leu'
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

    <Tab.Screen name="Está Lendo" component={SearchReadersList} />

    <Tab.Screen name="Já Leu" component={SearchReadersList} />

    <Tab.Screen name="Irá Ler" component={SearchReadersList} />

  </Tab.Navigator>
)

export default PeopleNavigator