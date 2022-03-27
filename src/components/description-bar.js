import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DescriptionBar = ({description, setRes}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <Text
            autoCapitalize='none'
            autoCorrect={false}
            placeholder={description ? '' : 'Conte sobre você :)'}
            style={styles.textInput}
          >
            {description}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 33,
    marginBottom: 15,
    marginLeft: 95,
    marginRight: 15,
  },
  textInput: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
    width: 225
  },
  segment:{
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  }
})

export default DescriptionBar