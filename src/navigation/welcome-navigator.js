
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import welcomeScreen from '../views/welcome/welcome'
import loginScreen from '../views/login/login'
import forgetPassword from '../views/login/forget-password'
import register from '../views/sign-up/register'
import genreSelection from '../views/genre-selection/genre-selection'
import genreSelectionSec from '../views/genre-selection/genre-selection-sec'
import Feed from '../views/feed/feed'


const Stack = createStackNavigator()

const WelcomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={welcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Login' component={loginScreen} options={{ headerShown: false }} />
    <Stack.Screen name='ForgetPassword' component={forgetPassword} options={{ headerShown: false }} />
    <Stack.Screen name='Register' component={register} options={{ headerShown: false}} />
    <Stack.Screen name='GenreSelection' component={genreSelection} options={{ headerShown: false}} />
    <Stack.Screen name='GenreSelectionSec' component={genreSelectionSec} options={{ headerShown: false}} />
    <Stack.Screen name='Feed' component={Feed} options={{ headerShown: false}} />
  </Stack.Navigator>
)

export default WelcomeNavigator