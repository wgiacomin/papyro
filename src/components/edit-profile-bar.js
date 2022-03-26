import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const EditProfileBar = ({ content }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
          >
            {content}
          </TextInput>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 296,
    height: 28,
    flexDirection: 'row',
    backgroundColor: '#ECEBEB',
    marginLeft: 46
  },
  textInput: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'left',
    left: 18,
    color: '#000000'
  },
  segment:{
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  }
})

export default EditProfileBar