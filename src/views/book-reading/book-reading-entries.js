import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'
import FIELDS from '../../routes/field_match'

// eslint-disable-next-line react/prop-types
const BookToReadEntries = ({ books }) => {
  return (
    <FlatList
      data={books}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          book={post.item[FIELDS.book_title]}
          autor='indisponível'
          image={post.item[FIELDS.cover]}
        />
      } } />
  )
}


export default BookToReadEntries