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
          cover={post.item.cover}
          navigation={navigation}
        />
      }} />
  )
}


export default BookSuggestionEntries