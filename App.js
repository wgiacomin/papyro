import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import { AuthProvider } from './src/context/auth-context'
import AppNavigator from './src/navigation/app-navigator'
import { MenuProvider } from 'react-native-popup-menu'

const fetchFontsAndToken = () => {
  return Font.loadAsync({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Jura': require('./assets/fonts/Jura-Regular.ttf'),
    'DM-Sans' : require('./assets/fonts/DMSans-Regular.ttf'),
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFontsAndToken}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }

  return (
    <AuthProvider>
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    </AuthProvider>
  )
}
