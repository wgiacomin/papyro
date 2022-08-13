import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'
import styles from './genre-style'


// eslint-disable-next-line react/prop-types
const Entry = ({post}) => {
  const [image, setImage] = useState(AddButton) 
  
  const handleClick = () => {
    if(image == AddButton){
      setImage(RemoveButton)
    }else{
      setImage(AddButton)
    }
  }
  return (
    <>
      <View style={styles.segment}>
        <Text style={styles.bold}>
          {post.item.name}
        </Text>
        <View style={styles.buttonSegment2}>
          <View style={styles.continueSegment2}>
            <TouchableOpacity
              onPress={handleClick}>
              <Image source={image} style={styles.buttonSize2} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>
          {post.item.description}       
        </Text>
      </View>
    </>
  )
}

export default Entry
