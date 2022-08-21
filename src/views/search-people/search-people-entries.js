import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const SearchPeopleEntries = ({ data, navigation, setPeople, useSearch, setRefresing, refreshing, setData, people }) => {
  return (
    <FlatList
      data={people}
      numColumns={1}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={() => useSearch({ setData, data, setPeople, people, page: data.page, refreshing, setRefresing })}
      onEndReachedThreshold={.5}
      renderItem={(post) => {
        return <Entry
          name={post.item.nickname}
          commom_books={post.item.common_books}
          commom_genre={post.item.common_genre}
          image={post.item.photo}
          navigation={navigation}
        />
      }} />
  )
}


export default SearchPeopleEntries