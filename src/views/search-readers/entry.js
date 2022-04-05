import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import mocked_image from '../../../assets/icons/image.png'

// eslint-disable-next-line react/prop-types
const Entry = ({name, image, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.segmnent}>
        <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
          <Image source={mocked_image} style={styles.person_image}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Friend')}>
          <Text style={styles.name_title}>{name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  segment:{
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 33,
    marginTop: 5,
    color: '#181D2D',
  },
  line_segment: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    marginTop: 10,
    //marginBottom: -80,
    //marginRight: 252
  },
  user_image:{
    width: 29,
    height: 29,
  },
  person: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    paddingLeft: 5,
    paddingRight: 10,
    marginTop: 5,
  },
})
  
export default Entry