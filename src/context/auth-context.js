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
      refresh_token: state.refresh_token ? state.refresh_token : action.refresh,
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
      refresh_token: null,
      error: '',
      name: null,
    }
  default:
    return { ...state }
  }
}

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, {
    access_token: null,
    refresh_token: null,
    error: '',
    name: ''
  })

  const signIn = async (access_token, refresh_token) => {
    try {
      if (refresh_token) {
        await AsyncStorage.setItem('refresh_token', refresh_token)
      }
      await AsyncStorage.setItem('access_token', access_token)
      dispatch({ type: 'signIn', access: access_token, refresh: refresh_token })
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
      await AsyncStorage.removeItem('refresh_token')
      dispatch({ type: 'signOut' })
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Problemas no logout.',
      })
    }
  }

  const setName = (name) => {
    try {
      dispatch({
        type: 'name',
        payload: name
      })
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Problemas no login.',
      })
    }
  }

  return (
    <AuthContext.Provider value={authState}>
      <AuthDispatch.Provider value={{ signIn, setName, logout }} >
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
