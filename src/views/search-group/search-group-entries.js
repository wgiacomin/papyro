import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const SearchGroupsEntries = ({mocks, navigation}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          group={post.item.group}
          commom_books={post.item.commom_books}
          note={post.item.note}
          image={post.item.image}
          navigation={ navigation }
        />
      } } />
  )
}


export default SearchGroupsEntries