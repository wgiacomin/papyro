import React from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'
import usernameIcon from '../../assets/icons/nickname.png'
import vertical from '../../assets/lines/straight.png'

const NicknameBar = ({data, setData}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <Image source={usernameIcon} style={styles.imageSize} />
          <Image source={vertical} style={styles.verticalLine} />
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Como gostaria de ser chamado?'
            style={styles.textInput}
            autoCompleteType='username'
            onChangeText={text => setData({...data, 'nickname': text})}
            value={data.apelido}
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

export default NicknameBar