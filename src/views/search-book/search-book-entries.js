import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const SearchBookEntries = ({mocks, navigation}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          livro={post.item.livro}
          image={post.item.image}
          autor={post.item.autor}
          navigation={ navigation }
        />
      } } />
  )
}


export default SearchBookEntries