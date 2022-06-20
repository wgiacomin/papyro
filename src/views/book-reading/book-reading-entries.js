import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const BookToReadEntries = ({ books, navigation }) => {
  return (
    <FlatList
      data={books}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          book={post.item.book_title}
          autor={post.item.author[0].name}
          image={post.item.cover}
          id={post.item.id}
          navigation={navigation}
        />
      } } />
  )
}


export default BookToReadEntries