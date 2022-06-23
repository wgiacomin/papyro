import React from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'
import profileIcon from '../../assets/icons/profile.png'
import vertical from '../../assets/lines/straight.png'

const ProfileBar = ({ data, setData }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <Image source={profileIcon} style={styles.imageSize} />
          <Image source={vertical} style={styles.verticalLine} />
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Nome Completo'
            style={styles.textInput}
            autoCompleteType='name'
            onChangeText={text => setData({ ...data, 'nome': text })}
            value={data.nome}
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
  segment: {
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

export default ProfileBar