import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const NotificationEntries = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          navigation={navigation}
          data={post.item}
        />
      } } />
  )
}


export default NotificationEntries