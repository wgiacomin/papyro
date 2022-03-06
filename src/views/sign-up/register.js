import React, {useState} from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './register-style'
import ProfileBar from '../../components/profile-bar'
import NicknameBar from '../../components/nickname-bar'
import EmailBar from '../../components/email-bar'
import PasswordBar from '../../components/password-bar'
import DateBar from'../../components/date-bar.js'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'

const Register = ({ navigation }) => {
  const [data, setData] = useState({
    'nome':'',
    'apelido': '',
    'email': '',
    'senha': '',
    'data': new Date(),
    'data_string': ''
  })

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
          <DateBar data={data} setData={setData} />
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
              onPress={() => navigation.navigate('GenreSelection')}>
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