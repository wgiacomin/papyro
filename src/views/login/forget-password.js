import React, {useState} from 'react'
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Pressable, Modal, Alert } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './login-style'
import EmailBar from '../../components/email-bar'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'

const ForgetPassword = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible) }>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Você receberá um e-mail contendo instruções para o reset de senha.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                navigation.navigate('Login')
              }}>
              <Text style={styles.textStyle}>Continuar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
          <EmailBar/>
        </View>
        <View style={styles.buttonSegment}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}>
            <Image source={circleButton} style={styles.buttonSize} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgetPassword
