import React from 'react'
import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import arrowButton from '../../../assets/buttons/arrowButton.png'
import EmailBar from '../../components/email-bar'
import PasswordBar from '../../components/password-bar'
import circleButton from '../../../assets/buttons/circleButton.png'

const loginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <TouchableOpacity
        style={styles.backSegment}
        onPress={() => navigation.goBack()}>
        <Image source={arrowButton} style={styles.imageSize} />
      </TouchableOpacity>
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
          <EmailBar/>
          <PasswordBar/>
        </View>
        <View>
          <Text style={styles.forgetPass}>
            Esqueceu sua senha?
          </Text>
        </View>
        <View style={styles.buttonSegment}>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
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
              <TouchableOpacity>
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

const styles = StyleSheet.create({
  standard: {
    flex: 1,
    marginTop: '8%',
  },
  segment:{
    left: '10%',
    paddingBottom: '5%'
  },
  backSegment:{
    left: '7%',
    marginTop: '2%'
  },
  title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'center',
    color: '#181D2D',
    alignSelf: 'flex-start',
    marginBottom: '5%',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,
    textAlign: 'center',
    color: '#AAAAAA',
    alignSelf: 'flex-start',
  },
  imageSize: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  forgetPass: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight:27,
    textAlign: 'center',
    color: '#324A59',
    marginTop: '1%'
  },
  buttonSize: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  buttonSegment:{
    marginRight: '10%',
    marginBottom: '10%',
    flex: 1,
    justifyContent: 'center'
  },
  continueSegment:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  signup:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginLeft: '10%',
    marginBottom: '10%',
  },
  normal:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,
    textAlign: 'left',
    color: '#AAAAAA',
  },
  bold:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight:27,
    textAlign: 'center',
    color: '#324A59',
    marginLeft: 10
  },
})

export default loginScreen
