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
          book={post.item.book}
          autor={post.item.autor}
          avaliacoes={post.item.avaliacoes}
          image={post.item.image}
        />
      } } />
  )
}


export default BookToReadEntries