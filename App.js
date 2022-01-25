import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import welcomeScreen from './src/views/welcome/welcome'
import loginScreen from './src/views/login/login'
import forgetPassword from './src/views/login/forget-password'

const Stack = createStackNavigator()

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Jura': require('./assets/fonts/Jura-Regular.ttf'),
  })
}

function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={welcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={loginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ForgetPassword' component={forgetPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App