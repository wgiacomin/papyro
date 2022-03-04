
import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import feed from '../views/feed/feed'
import home from '../../assets/icons/home.png'
import home_focused from '../../assets/icons/home_focused.png'
import notifications from '../../assets/icons/notifications.png'
import notifications_focused from '../../assets/icons/notifications_focused.png'
import books from '../../assets/icons/books.png'
import books_focused from '../../assets/icons/books_focused.png'
import groups from '../../assets/icons/groups.png'
import groups_focused from '../../assets/icons/groups_focused.png'

const Tab = createBottomTabNavigator()

const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName='Feed'
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

    <Tab.Screen name="Feed" component={feed} 
      options={{ 
        headerShown: false, 
        tabBarShowLabel: false, 
        tabBarIcon: ({focused, color, size }) => (
          <Image source={focused ? home_focused : home} style={{ width: size, height: size,}} />
        ),
      }} />

    <Tab.Screen name="Notifications" component={feed} options={{ 
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarIcon: ({focused, color, size }) => (
        <Image source={focused ? notifications_focused : notifications} style={{ width: size, height: size,}} />
      ),
    }} />

    <Tab.Screen name="Books" component={feed}
      options={{ 
        headerShown: false, 
        tabBarShowLabel: false, 
        tabBarIcon: ({ focused, color, size }) => (
          <Image source={focused ? books_focused : books} style={{ width: size, height: size,}} />
        ),
      }} />

    <Tab.Screen name="Groups" component={feed}
      options={{ 
        headerShown: false, 
        tabBarShowLabel: false, 
        tabBarIcon: ({ focused, color, size }) => (
          <Image source={focused ? groups_focused : groups} style={{ width: size+5, height: size+5,}} />
        ),
      }} />

  </Tab.Navigator>
)

export default MainNavigator