import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import Like from '../../components/heart'

// eslint-disable-next-line react/prop-types
const Entry = ({data, navigation}) => { 
  return (
    <>
      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Friend')}
        >
          <Image source={{uri: data.user.photo}} style={styles.person_image}/>  
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Friend')}
        >
          <Text style={styles.person}>{data.user.nickname}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        {data.comment.text}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.date}>{data.comment.date}</Text>
        <View style={styles.like_and_comments}>
          <Like liked={data.comment.you_liked} style={styles.icons} size={20} likes={data.comment.likes}/>
        </View>
      </View>
      <View style={styles.line}>
        <Image source={horizontal} style={styles.horizontalLine} />
      </View>
    </>
  )
}

  
export default Entry
const styles = StyleSheet.create({
  send:{
    alignSelf: 'center',
    marginRight: 10,
    width: 23,
    height: 23
  },
  text_input_container: {
    backgroundColor: '#dcdcdc',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  text_input_segment: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 15,
    flex: 1,
    marginRight: '5%'
  },
  text_input: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
    letterSpacing: -0.2,
    height: 30,
    color: '#dcdcdc'
  },
  end_of_file: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#C3C3C4',
    marginTop: 15,
    marginBottom: 15
  },
  number_comments: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#181D2D'
  },
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  person_image:{
    width: 32,
    height: 32,
    borderRadius: 25,
    marginRight: 5
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    marginTop: 10
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
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
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
    fontSize: 13,
    lineHeight: 13,
    paddingLeft: 5,
    paddingRight: 15
  },
  star:{
    width: 19,
    height: 19,
  },
  star_container: {
    flex: 1,
    flexDirection: 'row',
      
  },
  book_image: {
    maxWidth: 80,
    height: 120,
    width: 80,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 15,
  },
  container_book: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_book_title:{
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: '-10%',
  },
  book_title: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center'
  },
  book_subtitle: {
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: 10
  },
  want_to_read_container: {
    margin: 15,
    marginBottom: 20,
    flex: 1,
    alignItems: 'center'
  },
  want_to_read: {
    backgroundColor: '#324A59',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    textAlign: 'center',
    width: 121,
    height: 31,
  },
  want_to_read_list: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    width: 120,
    height: 30,
    textAlign: 'center',
    marginTop: 4,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 17,
    marginTop: 10
  },
  like_and_comments: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  date:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
})