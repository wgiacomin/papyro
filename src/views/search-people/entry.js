import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'

// eslint-disable-next-line react/prop-types
const Entry = ({ name, commom_books, commom_genre, image, navigation, id }) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Friend', { id })}>
          <Image source={{ uri: image }} style={styles.person_image} />
        </TouchableOpacity>
        <View style={styles.name_block}>
          <View style={styles.name_title_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend', { id })}>
              <Text style={styles.name_title}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.commom_container}>
              <Text style={styles.commom}>{commom_books > 0 ? `${commom_books} livros em comum.` : null}</Text>
              <Text style={styles.commom}>{commom_genre > 0 ? `${commom_genre} gêneros em comum.` : null}</Text>
            </View>
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
    marginTop: 15,
    marginBottom: 5
  },
  person_image: {
    width: 62,
    height: 60
  },
  name_block: {
    marginLeft: 10
  },
  name_title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
    marginTop: 3,
    marginRight: 100
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
    marginTop: -5
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
    marginTop: 3
  },
  line: {
    flex: 1,
    marginTop: 15,
    marginBottom: 8
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
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
  button_size: {
    width: 24,
    height: 24,
    marginLeft: 9,
  }
})

export default Entry