import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, Alert } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './login-style'
import CodeOtp from '../../components/code-otp-bar'
import PasswordBar from '../../components/password-bar'
import ConfirmationPasswordBar from '../../components/confirmation-password-bar'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'
import useResetPassword from './use-reset-password'


const ResetPassword = ({ navigation, route }) => {
	
  const [res, setRes] = useState({
    status: 0,
    msg: '' ,
  })
  
  const [data, setData] = useState({
    email: route.params?.email,
    code_otp: '',
    password: '',
    confirmation_password: '',
  })

  useEffect(() => {
    if (res.status > 300 & res.msg != ''){
      Alert.alert('Atenção!', res.msg)
      setRes('')
    }
  },[res])


  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
            Resetar Senha.
          </Text>
          <Text style={styles.subtitle}>
            Preencha os campos.
          </Text>
        </View>
        <View style={styles.segment}>
          <CodeOtp data={data} setData={setData}/>
          <PasswordBar data={data} setData={setData}/>
          <ConfirmationPasswordBar data={data} setData={setData}/>
        </View>
        <View style={styles.buttonSegment}>
          <TouchableOpacity
            onPress={() => {
              useResetPassword({data})
              navigation.navigate('Login')
            }}>
            <Image source={circleButton} style={styles.buttonSize} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ResetPassword
