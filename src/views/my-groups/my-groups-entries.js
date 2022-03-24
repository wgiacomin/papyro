import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const BookToReadEntries = ({mocks}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          group={post.item.group}
          description={post.item.description}
          image={post.item.amigo_um}
        />
      } } />
  )
}


export default BookToReadEntries