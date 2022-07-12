import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons' 
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'

const Like = ({ liked, style, size, likes }) => {
  const [data, setData] = useState({
    likes,
    liked
  })
  
  const onIncrment = () => {
    if (data.liked) setData({liked: false, likes: data.likes - 1})
    else setData({liked: true, likes: data.likes + 1})
  }

  return(
    <View >
      <TouchableOpacity 
        style={styles.buttons}
        onPress={onIncrment}
      >
        <FontAwesome
          name={data.liked ? 'heart' : 'heart-o'}
          size={size} 
          color={data.liked ? 'red' : 'black'} 
          style={style} />
        <Text style={styles.icon_text}>{data.likes}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Like

const styles = StyleSheet.create({
  icon_text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 13,
    paddingLeft: 5,
    paddingRight: 15
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})