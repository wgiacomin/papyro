import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons' 
import { TouchableOpacity, View, StyleSheet, Text, Alert } from 'react-native'
import { BRANCH, LIKE } from '@env'
import api from '../routes/api'
import ROUTES from '../routes/routes'


async function doLike({ id, type, deletion }) {
  if (BRANCH == 'dev' & LIKE == 1 ) {
    return
  }

  await api.patch(`${ROUTES.like}${type}/${id}/${deletion ? 0 : 1}`).then((response) => {
    
  }).catch((error) => {
    Alert.alert('Atenção', error.response.data.detail)
  })
}


const Like = ({ liked, style, size, likes, type, id }) => {
  const [data, setData] = useState({
    likes,
    liked
  })
  
  const onIncrment = () => {
    if (data.liked) {
      setData({liked: false, likes: data.likes - 1})
      doLike({id, type, deletion: true})
    }
    else {
      setData({liked: true, likes: data.likes + 1})
      doLike({id, type, deletion: false})
    }
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