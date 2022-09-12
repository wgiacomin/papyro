import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'

// eslint-disable-next-line react/prop-types
const Entry = ({ nickname, photo, interactions, navigation, id }) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Friend', { id })}>
          <Image source={{ uri: photo }} style={styles.person_image} />
        </TouchableOpacity>
        <View style={styles.name_block}>
          <View style={styles.name_title_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend', { id })}>
              <Text style={styles.name_title}>{nickname}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.commom_container}>
            <Text style={styles.note}>{interactions > 0 ? `Você e ${nickname} possuem ${interactions} interações!` : ''}</Text>
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
  container: {
    flex: 1,
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  person_image: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  name_block: {
    marginLeft: 10
  },
  name_title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    marginRight: 100,
    marginTop: -3
  },
  name_title_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  commom: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
  },
  commom_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  note: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#BFB4B4'
  },
  note_container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 5
  },
  line: {
    flex: 1,
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
  },
})

export default Entry