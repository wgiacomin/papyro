import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './login-style'
import EmailBar from '../../components/email-bar'
import PasswordBar from '../../components/password-bar'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'
import { useAuthDispatch } from '../../context/auth-context'
import useLogin from './use-login'
import spinner from '../../styles/spinner'

const Login = ({ navigation }) => {
  const { signIn, setProfile } = useAuthDispatch()

  const [res, setRes] = useState({
    status: 0,
    msg: '',
    access_token: '',
    refresh_token: '',
  })

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (res.status > 300 & res.msg != '') {
      Alert.alert('Atenção!', res.msg)
      setRes('')
    } else if (res.status == 200) {
      signIn(res.access_token, res.refresh_token, false)
    }
  }, [res])

  const [loading, setLoading] = useState(false)

  if (loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
            Login
          </Text>
          <Text style={styles.subtitle}>
            Faça login com seu e-mail e senha
          </Text>
        </View>
        <View style={styles.segment}>
          <EmailBar data={data} setData={setData} />
          <PasswordBar data={data} setData={setData} />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}
          >
            <Text style={styles.forgetPass}>
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSegment}>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => {
                setLoading(true)
                useLogin({ data, setRes, setProfile, setLoading })
              }}>
              <Image source={circleButton} style={styles.buttonSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.signup}>
            <View>
              <Text style={styles.normal}>
                Não tem login?
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
              >
                <Text style={styles.bold}>
                  Cadastre-se.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default Login