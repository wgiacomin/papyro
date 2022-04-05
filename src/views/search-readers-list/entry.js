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
        <View style={styles.name_block}>
          <View style={styles.name_title_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.name_title}>{name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.button_segment}>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.name_title}>Ver Mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segmnent: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  person_image: {
    width: 29,
    height: 29
  },
  name_block:{
    marginLeft: 10
  },
  name_title:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
  },
  name_title_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  footer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  button_segment: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: -55
  },
  button_size:{
    width: 24,
    height: 24,
    marginLeft: 9,
  }
})
  
export default Entry