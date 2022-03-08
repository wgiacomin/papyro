import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const NotificationEntries = ({mocks}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          text={post.item.text}
          image={post.item.image}
          data={post.item.data}
        />
      } } />
  )
}


export default NotificationEntries