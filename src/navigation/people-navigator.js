
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import BookRead from '../views/book-read/book-read'
import BookReading from '../views/book-reading/book-reading'
import BookToRead from '../views/book-to-read/book-to-read'
import SearchReadersList from '../views/search-readers-list/search-readers-list'
import SearchReaders from '../views/search-readers/search-readers'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()


const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="books"
  >
    <Stack.Screen name='books' component={SearchReadersList} options={{ headerShown: false }} />
  </Stack.Navigator>
)

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

    <Tab.Screen name="Irá Ler" component={SearchReadersList}/>

  </Tab.Navigator>
)

export default PeopleNavigator