import React from 'react'
import {FlatList } from 'react-native'
import FIELDS from '../../routes/field_match'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const BookToReadEntries = ({ books }) => {
  return (
    <FlatList
      data={books}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          book={post.item[FIELDS.book_title]}
          autor={post.item[FIELDS.author][0][FIELDS.name]}
          rate={post.item[FIELDS.rate]}
          image={post.item[FIELDS.cover]}
        />
      } } />
  )
}


export default BookToReadEntries