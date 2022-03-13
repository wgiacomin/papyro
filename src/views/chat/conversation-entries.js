import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const ChatEntries = ({mocks}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          name={post.item.nome}
          text={post.item.text}
          image={post.item.image}
        />
      } } />
  )
}


export default ChatEntries