import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import { AuthProvider } from './src/context/auth-context'
import AppNavigator from './src/navigation/app-navigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Jura': require('./assets/fonts/Jura-Regular.ttf'),
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  )
}
