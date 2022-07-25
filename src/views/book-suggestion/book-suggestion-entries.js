import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const BookSuggestionEntries = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      numColumns={1}
      renderItem={(post) => {
        return <Entry
          name={post.item.name}
          rate={post.item.rate}
          rates={post.item.rates}
          cover={post.item.cover}
          author={post.item.author.name}
          navigation={navigation}
        />
      }} />
  )
}


export default BookSuggestionEntries