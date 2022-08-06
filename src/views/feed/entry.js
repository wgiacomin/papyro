import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Like from '../../components/heart'
import Rate from '../../components/rate-stars'
import horizontal from '../../../assets/lines/straight.png'
import comments from '../../../assets/icons/chat.png'

// eslint-disable-next-line react/prop-types
const Entry = ({id, nickname, type, book_title, you_liked, rates, rate, date, photo, text, likes, cover, navigation, book_id}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Friend')}>
          <Image source={{uri: photo}} style={styles.person_image}/>  
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Friend')}>
          <Text style={styles.person}>{nickname}</Text>
        </TouchableOpacity>
        <Text style={styles.post_type}>{type}:</Text>
      </View>
      <View style={styles.book}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewBook', { id: book_id })}>
          <Image source={{ uri: cover}} style={styles.book_image}/>
        </TouchableOpacity>
        <View style={styles.book_block}>
          <View style={styles.book_title_container}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('ViewBook', { id: book_id })}>
              <Text style={styles.book_title}>{book_title}</Text>
            </TouchableOpacity>
            <View style={styles.star_container}>
              <Rate stars={rate} size={21} />
            </View>
          </View>
          <View style={styles.book_description_container}>
            <Text style={styles.book_description}>{text}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Comments', { id: id })}
            >
              <Text style={styles.see_more}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.data}>{date}</Text>
        <View style={styles.like_and_comments}>         
          <Like liked={you_liked} size={20} likes={likes} />
          <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Comments', { id: id })}>
            <Image source={comments} style={styles.icons}/>
            <Text style={styles.icon_text}>{rates}</Text>
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
  container: {
    flex: 1,
  },
  person_image:{
    width: 32,
    height: 32,
    borderRadius: 20
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
    fontSize: 17,
    lineHeight: 24,
    paddingLeft: 5,
    paddingRight: 5,
  },
  post_type:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 27,
    marginTop: 3
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
    fontSize: 18,
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
    flexWrap: 'wrap',
  },
  book_image: {
    width: 67,
    height: 95
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
    marginLeft: -2
  },
  see_more:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 22,
    color: '#007AFF',
    paddingLeft: 7,
    marginTop: -3
  }
})
  
export default Entry
