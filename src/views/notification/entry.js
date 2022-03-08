import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import mocked_image from '../../../assets/icons/profile_image.png'
import see_more from '../../../assets/icons/see_more_options.png'

// eslint-disable-next-line react/prop-types
const Entry = ({text, data, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <TouchableOpacity>
          <Image source={mocked_image} style={styles.profile_image}/>
        </TouchableOpacity> 
      </View>
      <View style={styles.block}>
        <View style={styles.description_container}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.data}>{data}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.option}>
          <TouchableOpacity style={styles.buttons}>
            <Image source={see_more} style={styles.see_more_image}/>
          </TouchableOpacity> 
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 316,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    left: -18
  },
  option: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  profile_image: {
    width: 50,
    height: 47.8,
    borderRadius: 100
  },
  see_more_image:{
    width: 29,
    height: 18,
  },
  block:{
    flex: 1,
  },
  text:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#181D2D',
    marginTop: '-8%',
    width: 212
  },
  data: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 9,
    lineHeight: 18,
    color: '#000000',
    marginBottom: '-3%'
  },
  description_container:{
    flexDirection: 'column',
    flex: 1,
    marginLeft: '18%'
  },
  container:{
    height: 56,
    width: 317,
    marginTop: 6,
  },
})
  
export default Entry