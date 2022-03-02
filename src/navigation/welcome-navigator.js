
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import welcomeScreen from '../views/welcome/welcome'
import loginScreen from '../views/login/login'
import forgetPassword from '../views/login/forget-password'
import register from '../views/sign-up/register'
import genreSelection from '../views/genreSelection/genreSelection'
import genreSelection2 from '../views/genreSelection/genreSelection2'


const Stack = createStackNavigator()

const WelcomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={welcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Login' component={loginScreen} options={{ headerShown: false }} />
    <Stack.Screen name='ForgetPassword' component={forgetPassword} options={{ headerShown: false }} />
    <Stack.Screen name='Register' component={register} options={{ headerShown: false}} />
    <Stack.Screen name='GenreSelection' component={genreSelection} options={{ headerShown: false}} />
    <Stack.Screen name='GenreSelection2' component={genreSelection2} options={{ headerShown: false}} />
  </Stack.Navigator>
)

export default WelcomeNavigator