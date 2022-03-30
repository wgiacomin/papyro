import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const BookSuggestionEntries = ({mocks, navigation}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          livro={post.item.livro}
          note={post.item.note}
          image={post.item.image}
          navigation={ navigation }
        />
      } } />
  )
}


export default BookSuggestionEntries