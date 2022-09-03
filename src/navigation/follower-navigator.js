
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Following from '../views/followers/followers'

const Tab = createMaterialTopTabNavigator()

const FollowNavigator = (props) => {
  const params = props.route.params.params
  return (
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

      <Tab.Screen name="Seguidores" component={Following} initialParams={{ ...params, route_type: 'following' }} />
      <Tab.Screen name="Seguindo" component={Following} initialParams={{ ...params, route_type: 'followers', }} />

    </Tab.Navigator>
  )
}

export default FollowNavigator