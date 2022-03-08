
import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import feed from '../views/feed/feed'
import home from '../../assets/icons/home.png'
import home_focused from '../../assets/icons/home_focused.png'
import notifications from '../../assets/icons/notifications.png'
import notifications_focused from '../../assets/icons/notifications_focused.png'
import books from '../../assets/icons/books.png'
import books_focused from '../../assets/icons/books_focused.png'
import groups from '../../assets/icons/groups.png'
import groups_focused from '../../assets/icons/groups_focused.png'
import people from '../views/profile/user-profile'
import genre from '../views/genre-selection/genre-selection'
import friend from '../views/profile/friend-profile'
import conversations from '../views/chat/conversations'
import comments from '../views/comments/comment'
import notification from '../views/notification/notification'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Feed' component={feed} options={{ headerShown: false }} />
    <Stack.Screen name='People' component={people} options={{ headerShown: false }} />
    <Stack.Screen name='Conversations' component={conversations} options={{ headerShown: false }} />
    <Stack.Screen name='Comments' component={comments} options={{ headerShown: false }} />
  </Stack.Navigator>
)

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

    <Tab.Screen name="FeedTab" component={StackNavigator} 
      options={{ 
        headerShown: false, 
        tabBarShowLabel: false, 
        tabBarIcon: ({focused, color, size }) => (
          <Image source={focused ? home_focused : home} style={{ width: size, height: size,}} />
        ),
      }} />

    <Tab.Screen name="Notifications" component={notification} options={{ 
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarIcon: ({focused, color, size }) => (
        <Image source={focused ? notifications_focused : notifications} style={{ width: size, height: size,}} />
      ),
    }} />

    <Tab.Screen name="Books" component={StackNavigator}
      options={{ 
        headerShown: false, 
        tabBarShowLabel: false, 
        tabBarIcon: ({ focused, color, size }) => (
          <Image source={focused ? books_focused : books} style={{ width: size, height: size,}} />
        ),
      }} />

    <Tab.Screen name="Profile" component={StackNavigator}
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