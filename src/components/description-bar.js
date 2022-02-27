import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const DescriptionBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            style={styles.textInput}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 337,
    height: 74,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#ECEBEB',
    borderRadius: 20,
    marginTop: 33,
    marginBottom: 15,
    marginLeft: 23,
    marginRight: 15,
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

export default DescriptionBar