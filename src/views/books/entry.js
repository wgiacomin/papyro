import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import Rate from '../../components/rate-stars'

// eslint-disable-next-line react/prop-types
const Entry = ({author, rate, cover, title, id, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.book}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewBook', { id })}
        >
          <Image source={{uri: cover}} style={styles.book_image}/>
        </TouchableOpacity>
        <View style={styles.book_block}>
          <View style={styles.book_title_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewBook', { id })}
            >
              <Text style={styles.book_style}>{title}</Text>
              <Text style={styles.autor_style}>{author}</Text>
            </TouchableOpacity>
            
            <View style={styles.star_container}>
              <Rate stars={rate} size={18} />
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
    fontSize: 15,
    lineHeight: 23,
    marginTop: -4,
    marginBottom: -10,
    marginRight: 50
  },
  autor_style:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 23,
    marginBottom: 4,
    marginTop: 5
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
    width: 51,
    height: 71
  },
  line:{
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  container:{
    flex: 1,
  },
  horizontalLine: {
    marginLeft: 0,
    width: '120%',
  },
  star:{
    width: 14,
    height: 14,
  },
  star_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    marginTop: 0,
  },
  see_more_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    marginLeft: 11,
    marginTop: -60
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