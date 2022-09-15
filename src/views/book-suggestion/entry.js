import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import Rate from '../../components/rate-stars'

// eslint-disable-next-line react/prop-types
const Entry = ({ name, rate, cover, author, id, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.livro}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewBook', { id })}>
          <Image source={{ uri: cover }} style={styles.livro_image} />
        </TouchableOpacity>
        <View style={styles.livro_block}>
          <View style={styles.livro_title_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewBook', { id })}>
              <Text style={styles.livro_title}>{name}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.author}>{author}</Text>
          <Rate stars={rate} size={17} />
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
    marginLeft: 7
  },
  livro: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  livro_image: {
    width: 51,
    height: 71
  },
  livro_block: {
    marginLeft: 10
  },
  livro_title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
    paddingRight: 60
  },
  author: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 24,
    marginTop: -10,
  },
  livro_title_container: {
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
    marginTop: 10,
    marginBottom: -2
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