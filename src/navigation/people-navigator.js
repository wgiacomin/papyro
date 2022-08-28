
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Company from '../views/company/company'

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

    <Tab.Screen name="Está Lendo" component={Company} initialParams={{ route_type: 'following' }} />

    <Tab.Screen name="Já Leu" component={Company} />

    <Tab.Screen name="Irá Ler" component={Company} />

  </Tab.Navigator>
)

export default PeopleNavigator