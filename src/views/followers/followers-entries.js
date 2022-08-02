import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const FollowersEntries = ({ data, navigation }) => {
  function renderItem(post) {
    return <Entry
      nickname={post.item.nickname}
      photo={post.item.photo}
      navigation={navigation}
    />
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      numColumns={1}
      renderItem={renderItem} />
  )
}


export default FollowersEntries