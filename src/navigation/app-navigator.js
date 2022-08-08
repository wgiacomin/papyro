import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, ActivityIndicator } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from '../../RootNavigation'
import { useAuthState } from '../context/auth-context'
import { useAuthDispatch } from '../context/auth-context'
import MainNavigator from './main-navigator'
import WelcomeNavigator from './welcome-navigator'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import spinner from '../styles/spinner'
import ROUTES from '../routes/routes'


async function refresh_func(setLoading, refresh, logout){
  const refresh_token = await AsyncStorage.getItem('refresh_token')
  if (refresh_token) {
    await axios.get(`${ROUTES.baseURL}/${ROUTES.refresh}`,
      {headers : {'Authorization': `Bearer ${refresh_token}`}})
      .then((response) => {refresh(response.data.access_token)})
      .catch(() => logout())
      .then(() => setLoading(false))
  } else {
    logout()
    setLoading(false)
  }
}

const Stack = createStackNavigator()

export default function AppNavigator() {
  const { access_token } = useAuthState()
  const { refresh, logout } = useAuthDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    refresh_func(setLoading, refresh, logout)
  }, [])

  useEffect(() => {
  }, [access_token])

  if (loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {access_token == null ? (
          <Stack.Screen name='Welcome' component={WelcomeNavigator} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Home" component={MainNavigator}
            options={{ 
              headerShown: false, 
              backBehavior: 'initialRoute', 
              tabBarShowLabel: false}} /> )}
      </Stack.Navigator>
    </NavigationContainer >
  )
}