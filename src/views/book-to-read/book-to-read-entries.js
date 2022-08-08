import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const BookToReadEntries = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          author={post.item.author[0]}
          rate={post.item.rate}
          cover={post.item.cover}
          title={post.item.book_title}
          id={post.item.id}
          navigation={navigation}
        />
      } } />
  )
}


export default BookToReadEntries