
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Company from '../views/companionship/companionship'

const Tab = createMaterialTopTabNavigator()


const PeopleNavigator = (props) => {
  const params = props.route.params.params
  return (
    <Tab.Navigator
      initialRouteName='Já Leu'
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

      <Tab.Screen name="Estou Lendo" component={Company} initialParams={{ ...params, id_status: 1 }} />

      <Tab.Screen name="Já Li" component={Company} initialParams={{ ...params, id_status: 2 }} />

      <Tab.Screen name="Quero Ler" component={Company} initialParams={{ ...params, id_status: 3 }} />

    </Tab.Navigator>
  )
}

export default PeopleNavigator