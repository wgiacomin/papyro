import React, {useState} from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, Alert } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './login-style'
import EmailBar from '../../components/email-bar'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'

const ForgetPassword = ({ navigation }) => {
  const [data, setData] = useState({
    'email': '',
  })

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
            onPress={() => Alert.alert('Atenção!', 'Você receberá um e-mail contendo instruções para a troca de senha.')}>
            <Image source={circleButton} style={styles.buttonSize} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgetPassword
