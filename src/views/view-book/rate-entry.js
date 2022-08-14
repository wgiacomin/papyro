import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import horizontal from '../../../assets/lines/straight.png'
import Like from '../../components/heart'
import styles from './view-book-style'
import Rate from '../../components/rate-stars'
import comments from '../../../assets/icons/chat.png'

// eslint-disable-next-line react/prop-types
const Entry = ({post, navigation }) => { 
  return (<>
    <View style={styles.comment_title}
      key={post.item.id}>
      <TouchableOpacity
        onPress={() => navigation.navigate('People', {id: post.item.user.id})}>
        <Image source={{ uri: post.item.user.photo }} style={styles.user_image} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('People', {id: post.item.user.id})}>
        <Text style={styles.person}>{post.item.user.nickname}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.star_container_comments}>
      <Rate stars={post.item.rate} size={17} />
    </View>

    <View style={styles.book_description_container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Comments', { id: post.item.id })}>
        <Text style={styles.book_description}>{post.item.text}</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.footer}>
      <Text style={styles.date}>{post.item.date.slice(0, 10)}</Text>
      <View style={styles.like_and_comments}>
        <View>
          <View style={styles.like_and_comments}>
            <Like liked={post.item.you_liked} size={20} likes={post.item.likes} type={'c'} id={post.item.id} />
          </View>
        </View>

        <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('Comments' , { id: post.item.id})}>
          <Image source={comments} style={styles.icons} />
          <Text style={styles.icon_text}> {post.item.comments} </Text>
        </TouchableOpacity>
      </View >
    </View >
    <View style={styles.line}>
      <Image source={horizontal} style={styles.horizontalLine} />
    </View>
  </>)

}

export default Entry