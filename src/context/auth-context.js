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
        refresh_token: action.refresh_token,
        error: '',
        first_login: action.first_login,
      }
    case 'refresh':
      return {
        ...state,
        access_token: action.access,
        error: '',
      }
    case 'error':
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        error: action.payload,
      }
    case 'signOut':
      return {
        ...state,
        access_token: null,
        refresh_token: null,
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
    refresh_token: null,
    error: '',
    profile: { description: '', name: '', nickname: '', id: 0, email: '', photo: '' },
    first_login: false
  })

  const signIn = async (access_token, refresh_token, first_login) => {
    try {
      await AsyncStorage.setItem('access_token', access_token)
      await AsyncStorage.setItem('refresh_token', refresh_token)
      dispatch({ type: 'signIn', access: access_token, refresh: refresh_token, first_login })
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Problemas para autenticar usuário.',
      })
    }
  }

  const refresh = async (access_token) => {
    try {
      await AsyncStorage.setItem('access_token', access_token)
      const profile = await AsyncStorage.getItem('profile')
      dispatch({
        type: 'profile',
        payload: { ...JSON.parse(profile) }
      })
      dispatch({ type: 'refresh', access: access_token })
    } catch (err) {
      await AsyncStorage.removeItem('refresh_token')
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
      await AsyncStorage.removeItem('profile')
      dispatch({ type: 'signOut' })
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Problemas no logout.',
      })
    }
  }

  const setProfile = async (profile) => {
    try {
      let bc_profile = await AsyncStorage.getItem('profile')
      bc_profile = JSON.parse(bc_profile)

      await AsyncStorage.setItem('profile', JSON.stringify({ ...bc_profile, ...profile }))
      dispatch({
        type: 'profile',
        payload: { ...profile }
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
      <AuthDispatch.Provider value={{ signIn, setProfile, logout, refresh }} >
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
