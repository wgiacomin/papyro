import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import mocked_image from '../../../assets/icons/profile_image.png'

// eslint-disable-next-line react/prop-types
const Entry = ({name, text, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.messages}>
        <TouchableOpacity>
          <Image source={mocked_image} style={styles.profile_image}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.person}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.block}>
        <View style={styles.description_container}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  person: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#09051C',
    fontSize: 15,
    lineHeight: 20,
    paddingLeft: 17,
    paddingTop: 10
  },
  messages: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  profile_image: {
    width: 62,
    height: 62,
    borderRadius: 16,
    marginLeft: 10
  },
  block:{
    marginLeft: 50,
  },
  text:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: '#3B3B3B',
    opacity: 0.3,
    marginTop: 1
  },
  description_container:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: -35,
    paddingLeft: 40,
  },
  container:{
    shadowColor: 'rgba(90, 108, 234, 0.07)',
    borderRadius: 22,
    height: 81,
    width: 345,
    marginTop: 20,
  },
})

  
export default Entry