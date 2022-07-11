import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

// eslint-disable-next-line react/prop-types
const Entry = ({data, navigation}) => { 
  return (
    <TouchableOpacity
      onPress={() => {
        switch(data.notification.refer) {
        case 'comment':
          navigation.navigate('Comments', {id: 1})
          break
        case 'follow':
          navigation.navigate('Friend')
          break
        }
      }}
      style={{flex: 1, flexDirection: 'column'}}    
    >
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity>
            <Image source={{uri:data.user.photo}} style={styles.profile_image}/>
          </TouchableOpacity> 
        </View>
        <View style={styles.block}>
          <View style={styles.description_container}>
            <Text style={styles.text}>{data.notification.text}</Text>
            <Text style={styles.data}>{data.notification.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  profile: {
    marginBottom: 10,
    marginLeft: 0
  },
  profile_image: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  block:{
    flex: 1,
  },
  text:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#181D2D',
  },
  data: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 18,
    color: '#000000',
  },
  description_container:{
    flexDirection: 'column',
    flex: 1,
    marginLeft: '7%',
    width: 212
  },
  container:{
    flex: 1,
    flexDirection: 'row',
    marginTop: '7%',
  },
})
  
export default Entry