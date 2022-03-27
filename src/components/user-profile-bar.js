import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import vertical from '../../assets/lines/straight.png'
import editButton from '../../assets/buttons/editButton.png'
import msgButton from '../../assets/buttons/messagesButton.png'
import BackButton from './back-button'

const UserProfileBar = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <View style={styles.back_button}>
            <BackButton navigation={navigation}/>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}>
            <Image source={editButton} style={styles.buttonEdit} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Conversations')}>
            <Image source={msgButton} style={styles.buttonMsg} />
          </TouchableOpacity>
          <Text style={styles.title}>
              Meu Perfil
          </Text>
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
  imageSize: {
    width: 22,
    height: 22,
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  segment:{
    flexDirection: 'row',
    left: '4%',
  },
  back_button: {
    paddingRight: 10
  },
  HorizontalLine: {
    alignSelf: 'center',
    height: 1,
    width: 360,
    marginBottom: 20,
    marginTop: -7
  },
  buttonEdit: {
    width: 20,
    height: 20,
    flexDirection: 'row',
    marginLeft: 275,
  },
  buttonMsg: {
    width: 25,
    height: 25,
    flexDirection: 'row',
    marginLeft: 8
  },
  title: {  
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 32,
    lineHeight: 48,
    marginLeft: -260,
    color: '#181D2D',
    marginTop: '-5%'
  }
})

export default UserProfileBar