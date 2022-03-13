import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import mocked_book from '../../../assets/icons/mocked_book.png'
import full_star from '../../../assets/icons/full_star.png'
import star from '../../../assets/icons/star.png'

// eslint-disable-next-line react/prop-types
const Entry = ({book, autor, image, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.book}>
        <TouchableOpacity>
          <Image source={mocked_book} style={styles.book_image}/>
        </TouchableOpacity>
        <View style={styles.book_block}>
          <View style={styles.book_title_container}>
            <TouchableOpacity>
              <Text style={styles.book_style}>{book}</Text>
            </TouchableOpacity>
            <Text style={styles.autor_style}>{autor}</Text>
            <View style={styles.star_container}>
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={star} style={styles.star}/> 
              <TouchableOpacity
                onPress={() => navigation.navigate('Comments')}
              >
                <Text style={styles.see_more}>Ver</Text>
              </TouchableOpacity>
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
  star:{
    width: 14,
    height: 14,
  },
  star_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    marginTop: 0,
    marginLeft: 11
  },
  see_more:{
    fontFamily: 'DM-Sans',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    alignSelf: 'flex-end',
    color: '#007AFF',
    letterSpacing: -0.408,
    paddingLeft: 162,
    marginTop: -27
  },
})
  
export default Entry