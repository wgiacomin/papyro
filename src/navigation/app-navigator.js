import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from '../../RootNavigation'
import { useAuthState } from '../context/auth-context'
import MainNavigator from './main-navigator'
import WelcomeNavigator from './welcome-navigator'

const Stack = createStackNavigator()

export default function AppNavigator() {
  const { access_token } = useAuthState()

  useEffect(() => {
  }, [access_token])

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