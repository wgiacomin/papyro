
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Following from '../views/friends/friends'



const Tab = createMaterialTopTabNavigator()


const FollowNavigator = () => (
  <Tab.Navigator
    initialRouteName='Seguidores'
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

    <Tab.Screen name="Seguidores" component={Following} initialParams={{ route_type: 'following' }} />

    <Tab.Screen name="Seguindo" component={Following} initialParams={{ route_type: 'followers' }} />

  </Tab.Navigator>
)

export default FollowNavigator