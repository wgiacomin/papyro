import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './register-style'
import ProfileBar from '../../components/profile-bar'
import NicknameBar from '../../components/nickname-bar'
import EmailBar from '../../components/email-bar'
import ConfirmationPasswordBar from '../../components/confirmation-password-bar'
import PasswordBar from '../../components/password-bar'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'
import useRegister from './use-register'
import useLogin from '../login/use-login'
import { useAuthDispatch } from '../../context/auth-context'
import spinner from '../../styles/spinner'


const Register = ({ navigation }) => {
  const { setProfile } = useAuthDispatch()
  const { signIn } = useAuthDispatch()

  const dateOffset = 24*60*60*1000
  let actual_date = new Date()
  actual_date.setFullYear(actual_date.getFullYear() - 18)
  actual_date.setTime(actual_date.getTime() - dateOffset)

  const [res, setRes] = useState({
    status: 0,
    msg: '' ,
    access_token: '',
    refresh_token: '',
  })

  const [res1, setRes1] = useState({
    status: 0,
    msg: '' ,
    access_token: '',
    refresh_token: '',
  })
  useEffect(() => {
    if (res.status > 300 & res.msg != ''){
      Alert.alert('Atenção!', res.msg)
      setRes('')
    } else if (res.status == 201){
      Alert.alert('Sucesso!', 'Cadastro finalizado com sucesso!')

      useLogin({data, setRes1, setProfile, setLoading})
      signIn(res1.access_token, res1.refresh_token)
      navigation.navigate('GenreSelection')
    }
  }, [res])
  

  const [data, setData] = useState({ 
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmation_password: '',  
  })

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
              Cadastro
          </Text>
          <Text style={styles.subtitle}>
              Cadastre uma nova conta
          </Text>
        </View>
        <View style={styles.segment}>
          <ProfileBar data={data} setData={setData} />
          <NicknameBar data={data} setData={setData} />
          <EmailBar data={data} setData={setData} />
          <PasswordBar data={data} setData={setData} />
          <ConfirmationPasswordBar data={data} setData={setData}/>
        </View>
        <View style={styles.term}>
          <View>
            <Text style={styles.terms}>
              Ao continuar, você aceita os nossos 
            </Text>  
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.termsBold}>
                  termos de uso.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonSegment}>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => {
                useRegister({ data, setRes })
              }}>
              <Image source={circleButton} style={styles.buttonSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.login}>
            <View>
              <Text style={styles.normal}>
                Já tem cadastro?  
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {console.log(data)}}
              >
                <Text style={styles.bold}>
                  Faça login.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default Register