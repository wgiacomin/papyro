import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import friendMocked from '../../../assets/icons/profile_image.png'

// eslint-disable-next-line react/prop-types
const Entry = ({group, description, image, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.group_title_container}>
          <Text style={styles.group_style}>{group}</Text>
          <View style={styles.description_container}>
            <Image source={friendMocked} style={styles.group_image}/> 
            <Text style={styles.description_style}>{description}</Text>
          </View>
          <View style={styles.see_more_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Comments')}
            >
              <Text style={styles.see_more}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.line}>
        <Image source={horizontal} style={styles.horizontalLine} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  group: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5
  },
  group_title_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  group_style:{
    fontFamily: 'Poppins-Bold',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 27,
    color: '#181D2D'
  },
  description_style:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 9,
    lineHeight: 18,
    marginBottom: 5
  },
  group_image: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginRight: 3,
  },
  line:{
    flex: 1,
    marginTop: 5,
    marginBottom: 5
  },
  container:{
    flex: 1,
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
  },
  see_more_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    marginTop: 0,
  },
  see_more: {
    fontFamily: 'DM-Sans',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    alignSelf: 'flex-end',
    color: '#007AFF',
    letterSpacing: -0.408,
    paddingLeft: 292,
    marginTop: -37
  },
  description_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    marginTop: 0,
    marginLeft: 11
  }
})
  
export default Entry