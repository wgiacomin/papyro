
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import searchBook from '../views/search-book/search-book'
import searchPeople from '../views/search-people/search-people'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="books"
  >
    <Stack.Screen name='books' component={searchBook} options={{ headerShown: false }} />
  </Stack.Navigator>
)

const SearchNavigator = () => (
  <Tab.Navigator
    initialRouteName='Livros'
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

    <Tab.Screen name="Pessoas" component={searchPeople} />

    <Tab.Screen name="Livros" component={searchBook} />

  </Tab.Navigator>
)

export default SearchNavigator