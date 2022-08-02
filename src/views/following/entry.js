import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'

// eslint-disable-next-line react/prop-types
const Entry = ({ nickname, photo, navigation }) => {
  return (
    <View style={styles.people_segment}>
      {/* <View> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Friend')}>
        <Image source={{ uri: photo }} style={styles.user_image} />
      </TouchableOpacity>
      <View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Friend')}>
            <Text style={styles.person}>{nickname}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </View> */}
    </View>
  )
}

export default Entry

const styles = StyleSheet.create({
  people_segment: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  user_image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  person: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 17,
    paddingLeft: 10,
    marginTop: 15,
  },
})