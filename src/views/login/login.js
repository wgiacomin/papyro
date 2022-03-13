import React, {useState} from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './login-style'
import EmailBar from '../../components/email-bar'
import PasswordBar from '../../components/password-bar'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'
import { useAuthDispatch } from '../../context/auth-context'

const Login = ({ navigation }) => {
  const { signIn } = useAuthDispatch()

  const [data, setData] = useState({
    'email': '',
    'senha': '',
  })

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
          <EmailBar data={data} setData={setData}/>
          <PasswordBar data={data} setData={setData}/>
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
                signIn('sim', 'sim')
                navigation.navigate('Login')
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