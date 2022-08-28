import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'
import styles from './genre-style'
import updateGenre from './update-genre'


const Entry = ({ item }) => {
  const handleClick = () => {
    if (image == AddButton) {
      updateGenre({ id: item.id, mode: true })
      setImage(RemoveButton)
    } else {
      updateGenre({ id: item.id, mode: false })
      setImage(AddButton)
    }
  }

  const [image, setImage] = useState(item.select_genre ? RemoveButton : AddButton)

  return (
    <>
      <View style={styles.segment}>
        <Text style={styles.bold}>
          {item.name}
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
          {item.description}
        </Text>
      </View>
    </>
  )
}

export default Entry
