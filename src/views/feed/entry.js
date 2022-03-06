import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import image_mocked from '../../../assets/icons/image.png'
import like from '../../../assets/icons/like.png'
import comments from '../../../assets/icons/chat.png'
import mocked_book from '../../../assets/icons/mocked_book.png'
import full_star from '../../../assets/icons/full_star.png'
import star from '../../../assets/icons/star.png'

// eslint-disable-next-line react/prop-types
const Entry = ({name, livro, comentarios, data, texto_abreviado, curtidas, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity>
          <Image source={image_mocked} style={styles.person_image}/>  
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.person}>{name}</Text>
        </TouchableOpacity>
        <Text style={styles.post_type}>avaliou o livro:</Text>
      </View>
      <View style={styles.book}>
        <TouchableOpacity>
          <Image source={mocked_book} style={styles.book_image}/>
        </TouchableOpacity>
        <View style={styles.book_block}>
          <View style={styles.book_title_container}>
            <TouchableOpacity>
              <Text style={styles.book_title}>{livro}</Text>
            </TouchableOpacity>
            <View style={styles.star_container}>
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={star} style={styles.star}/> 
            </View>
          </View>
          <View style={styles.book_description_container}>
            <Text style={styles.book_description}>{texto_abreviado}</Text>
            <TouchableOpacity>
              <Text style={styles.see_more}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.data}>{data}</Text>
        <View style={styles.like_and_comments}>
          <TouchableOpacity style={styles.buttons}>
            <Image source={like} style={styles.icons}/>
            <Text style={styles.icon_text}>{curtidas}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Image source={comments} style={styles.icons}/>
            <Text style={styles.icon_text}>{comentarios}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}>
        <Image source={horizontal} style={styles.horizontalLine} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  person_image:{
    width: 27,
    height: 27
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  person: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 5,
    paddingRight: 5,
  },
  post_type:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 27,
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
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 23,
  },
  book_title_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  book_description:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
  },
  book_description_container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  book_image: {
    width: 57,
    height: 85
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  line:{
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  data: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
  like_and_comments: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container:{
    flex: 1,
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
  },
  icons: {
    width: 20,
    height: 20
  },
  icon_text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
    paddingLeft: 5,
    paddingRight: 15
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
  see_more:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 22,
    color: '#007AFF',
    paddingLeft: 7
  }
})
  
export default Entry