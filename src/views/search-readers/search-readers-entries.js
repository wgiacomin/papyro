import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const SearchReadersEntries = ({mocks, navigation}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          name={post.item.name}
          image={post.item.image}
          navigation={ navigation }
        />
      } } />
  )
}


export default SearchReadersEntries