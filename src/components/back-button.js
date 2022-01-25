import React from 'react'
import arrowButton from '../../assets/buttons/arrowButton.png'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.backSegment}
      onPress={() => navigation.goBack()}>
      <Image source={arrowButton} style={styles.imageSize} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  segment:{
    left: '10%',
    paddingBottom: '5%'
  },
  backSegment:{
    left: '7%',
    marginTop: '2%'
  },
  imageSize: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  }
})

export default BackButton