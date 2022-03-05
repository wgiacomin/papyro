import React from 'react'
import {FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const FeedEntries = ({mocks}) => {
  return (
    <FlatList
      data={mocks}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          name={post.item.nome}
          comentarios={post.item.comentarios}
          curtidas={post.item.curtidas}
          texto_abreviado={post.item.texto_abreviado}
          livro={post.item.livro}
          image={post.item.image}
          data={post.item.data}
        />
      } } />
  )
}


export default FeedEntries