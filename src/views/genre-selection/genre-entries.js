import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'
import styles from './genre-style'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const GenreEntries = ({data, navigation}) => {

  return (
    <FlatList
      data={data}
      numColumns={1}
      renderItem={(post) => {
        return <Entry post={post} />
      } } />
  )
}


export default GenreEntries