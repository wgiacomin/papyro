import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import Rate from '../../components/rate-stars'


// eslint-disable-next-line react/prop-types
const Entry = ({name, author, cover, navigation, rate, book_id}) => {
  return (
    <View style={styles.container}>
      <View style={styles.book}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewBook', { id: book_id })}>
          <Image source={{uri: cover}} style={styles.book_image}/>
        </TouchableOpacity>
        <View style={styles.book_block}>
          <View style={styles.book_title_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewBook', { id: book_id })}>
              <Text style={styles.book_title}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.autor_container}>
              <Text style={styles.autor}>{author}</Text>
            </View>
            <View style={styles.star_container}>
              <Rate stars={rate} />
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
  book: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  book_block:{
    marginLeft: 10
  },
  book_title:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 25,
    marginRight: 100,
  },
  book_title_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  autor:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 16,
  },
  autor_container: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: -5
  },
  book_image: {
    width: 62,
    height: 60
  },
  line:{
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
  },
  star:{
    width: 19,
    height: 18,
  },
  star_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    marginTop: 1,
  },
})
  
export default Entry