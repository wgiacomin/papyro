import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'
import FIELDS from '../../routes/field_match'

// eslint-disable-next-line react/prop-types
const BookToReadEntries = ({ books, navigation }) => {
  return (
    <FlatList
      data={books}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          book={post.item[FIELDS.book_title]}
          autor={post.item[FIELDS.author][0][FIELDS.name]}
          image={post.item[FIELDS.cover]}
          id={post.item.id}
          navigation={navigation}
        />
      } } />
  )
}


export default BookToReadEntries