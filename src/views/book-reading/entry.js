import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import APIROUTES from '../../routes/open_api'

// eslint-disable-next-line react/prop-types
const Entry = ({book, autor, image, navigation, id }) => {
  return (
    <View style={styles.container}>
      <View style={styles.book}>
        <Image source={{uri: APIROUTES.cover + image + '.jpg'}} style={styles.book_image}/>
        <View style={styles.book_block}>
          <View style={styles.book_title_container}>
            <Text style={styles.book_style}>{book}</Text>
            <Text style={styles.autor_style}>{autor}</Text>
          </View>
          <View style={styles.see_more_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewBook', { id })}
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
  book: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  book_block:{
    marginLeft: 10
  },
  book_style:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 23,
    marginTop: -4,
    marginBottom: -10
  },
  autor_style:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 23,
    marginBottom: 4
  },
  book_title_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  book_description_container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  book_image: {
    width: 41,
    height: 61
  },
  line:{
    flex: 1,
    marginTop: 10,
    marginBottom: 10
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
    marginLeft: 11,
    marginTop: -45
  },
  see_more:{
    fontFamily: 'DM-Sans',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    alignSelf: 'flex-end',
    color: '#007AFF',
    letterSpacing: -0.408,
    paddingLeft: 232,
  },
})
  
export default Entry