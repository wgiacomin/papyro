import React, { createContext, useReducer, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext()
const AuthDispatch = createContext()

function authReducer(state, action) {
  switch (action.type) {
  case 'signIn':
    return {
      ...state,
      access_token: action.access,
      error: '',
    }
  case 'error':
    return {
      ...state,
      access_token: null,
      error: action.payload,
    }
  case 'signOut':
    return {
      ...state,
      access_token: null,
      error: '',
      profile: null,
    }
  case 'profile':
    return {
      ...state,
      profile: action.payload
    }
  default:
    return { ...state }
  }
}

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, {
    access_token: null,
    error: '',
    profile: {description: '', name: '', nickname: '', id: 0, email: '', birthday:''}
  })

  const signIn = async (access_token) => {
    try {
      await AsyncStorage.setItem('access_token', access_token)
      dispatch({ type: 'signIn', access: access_token })
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Problemas para autenticar usuário.',
      })
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('access_token')
      dispatch({ type: 'signOut' })
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Problemas no logout.',
      })
    }
  }

  const setProfile = (profile) => {
    try {
      dispatch({
        type: 'profile',
        payload: {...profile}
      })
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Problemas no perfil.',
      })
    }
  }

  return (
    <AuthContext.Provider value={authState}>
      <AuthDispatch.Provider value={{ signIn, setProfile, logout }} >
        {children}
      </AuthDispatch.Provider>
    </AuthContext.Provider>
  )
}


function useAuthState() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }
  return context
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatch)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuthState, useAuthDispatch }
