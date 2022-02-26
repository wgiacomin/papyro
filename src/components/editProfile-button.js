import React from 'react'
import editButton from '../../assets/buttons/editButton.png'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

const EditButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.backSegment}
      onPress={() => navigation.goBack()}>
      <Image source={editButton} style={styles.imageSize} />
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

export default EditButton