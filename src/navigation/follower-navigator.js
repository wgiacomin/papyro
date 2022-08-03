
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Followers from '../views/followers/followers'
import Following from '../views/following/following'



const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()


const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="followers"
  >
    <Stack.Screen name='followers' component={Followers} options={{ headerShown: false }} />
  </Stack.Navigator>
)

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

    <Tab.Screen name="Seguidores" component={Followers} />

    <Tab.Screen name="Seguindo" component={Following} />

  </Tab.Navigator>
)

export default FollowNavigator