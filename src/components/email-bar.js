import React from 'react'
import { View, Image, TextInput, StyleSheet, Alert } from 'react-native'
import messageIcon from '../../assets/icons/Message.png'
import vertical from '../../assets/lines/straight.png'

const EmailBar = ({data, setData}) => {

  function validateEmail(email){
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email) | email.length == 0)
    {
      return (true)
    }
    Alert.alert('Atenção!', 'E-mail inválido!')
    setData({...data, 'email': ''})
    return (false)
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <Image source={messageIcon} style={styles.imageSize} />
          <Image source={vertical} style={styles.verticalLine} />
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='E-mail'
            style={styles.textInput}
            autoCompleteType='email'
            onChangeText={text => setData({...data, 'email': text})}
            value={data.email}
            keyboardType={'email-address'}
            onEndEditing={() => validateEmail(data.email)}
            returnKeyType={'done'}
          />
        </View>
      </View>
      <View>
        <Image source={vertical} style={styles.HorizontalLine} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center'
  },
  textInput: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
    letterSpacing: -0.2
  },
  imageSize: {
    width: 18,
    height: 18,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  segment:{
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  },
  verticalLine: {
    marginLeft: 10,
    width: 1,
    height: 25.5,
  },
  HorizontalLine: {
    marginLeft: 0,
    height: 1,
  },
})

export default EmailBar