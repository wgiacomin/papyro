import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const SearchBookEntries = ({ data, navigation, refreshing, setData, setBooks, books, useSearch, setRefresing }) => {
  return (
    <FlatList
      data={books}
      numColumns={1}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={() => useSearch({ setData, data, setBooks, books, page: data.page, refreshing, setRefresing })}
      onEndReachedThreshold={.5}
      renderItem={(post) => {
        return <Entry
          name={post.item.name}
          cover={post.item.cover}
          author={post.item.author.name}
          rate={post.item.rate}
          navigation={navigation}
        />
      }} />
  )
}


export default SearchBookEntries