import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const FeedEntries = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      numColumns={1}
      renderItem={(post) => {
        return <Entry 
          nickname={post.item.user.nickname}
          photo={post.item.user.photo}
          rates={post.item.rates}
          likes={post.item.likes}
          text={post.item.text}
          book_title={post.item.book.book_title}
          cover={post.item.book.cover}
          date={post.item.date}
          type={post.item.type}
          navigation={ navigation }
        />
      } } />
  )
}


export default FeedEntries