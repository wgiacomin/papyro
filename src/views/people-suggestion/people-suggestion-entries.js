import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const SearchPeopleEntries = ({mocks, navigation}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          name={post.item.name}
          commom_books={post.item.commom_books}
          commom_genre={post.item.commom_genre}
          note={post.item.note}
          image={post.item.image}
          navigation={ navigation }
        />
      } } />
  )
}


export default SearchPeopleEntries