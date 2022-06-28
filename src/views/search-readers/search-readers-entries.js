import React from 'react'
import { FlatList } from 'react-native'
import Entry from './entry'

// eslint-disable-next-line react/prop-types
const SearchReadersEntries = ({ data, navigation }) => {
    return (
        <FlatList
            data={data}
            numColumns={1}
            renderItem={(post) => {
                return <Entry
                    nickname={post.item.nickname}
                    photo={post.item.photo}
                    navigation={navigation}
                />
            }} />
    )
}


export default SearchReadersEntries