import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const BookReadEntries = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          author={post.item.author.name}
          rate={post.item.rate}
          cover={post.item.cover}
          title={post.item.name}
          id={post.item.id}
          navigation={navigation}
        />
      } } />
  )
}


export default BookReadEntries