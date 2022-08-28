import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './login-style'
import EmailBar from '../../components/email-bar'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'
import useForgetPassword from './use-forget-password'
import spinner from '../../styles/spinner'

const ForgetPassword = ({ navigation }) => {

  const [res, setRes] = useState({
    status: 0,
    msg: '' ,
  })
  
  const [data, setData] = useState({
    email: '',
  })

  useEffect(() => {
    if (res.status > 300 & res.msg != ''){
      Alert.alert('Atenção!', res.msg)
      setRes('')
    }
  },[res])

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
            Esqueceu sua senha?
          </Text>
          <Text style={styles.subtitle}>
            Digite seu e-mail para recuperar sua senha.
          </Text>
        </View>
        <View style={styles.segment}>
          <EmailBar data={data} setData={setData}/>
        </View>
        <View style={styles.buttonSegment}>
          <TouchableOpacity
            onPress={() => {
              setLoading(true)
              useForgetPassword({data, setRes, setLoading, navigation})
            }}>
            <Image source={circleButton} style={styles.buttonSize} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgetPassword
