import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import vertical from '../../assets/lines/straight.png'
import editButton from '../../assets/buttons/editButton.png'
import BackButton from './back-button'

const UserProfileBar = ({ navigation, reload }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <View style={styles.back_button}>
            <BackButton navigation={navigation} />
          </View>

          <Text style={styles.title}>
            Meu Perfil
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile', { reload })}>
            <Image source={editButton} style={styles.buttonEdit} />
          </TouchableOpacity>
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
  segment: {
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
    marginLeft: 70
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 32,
    lineHeight: 48,
    color: '#181D2D',
    marginTop: '-4%',
    marginLeft: 65
  }
})

export default UserProfileBar