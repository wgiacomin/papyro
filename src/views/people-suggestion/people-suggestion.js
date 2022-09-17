import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, FlatList } from 'react-native'
import safeView from '../../styles/safe-view'
import Entry from './entry'
import usePeopleSuggestion from './use-people-suggestion'

const PeopleSuggestion = ({ navigation }) => {
  const [data, setData] = useState({
    page: 0,
    loading: true,
  })

  const [peopleSuggestion, setPeopleSuggestion] = useState([])

  useEffect(() => {
    usePeopleSuggestion({ setPeopleSuggestion, page: 0, setData })
  }, [])

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sugestão de Amigos</Text>
        <FlatList
          data={peopleSuggestion}
          numColumns={1}
          refreshing={data.loading}
          ListEmptyComponent={() => <Text>Sem Indicações</Text>}
          onRefresh={() => {
            setData({ loading: true })
            usePeopleSuggestion({ setPeopleSuggestion, page: data.page, setData })
          }}
          renderItem={(post) => {
            return <Entry
              nickname={post.item.nickname}
              interactions={post.item.interactions}
              photo={post.item.photo}
              id={post.item.id}
              navigation={navigation}
            />
          }} />
      </View>
    </SafeAreaView>
  )
}

export default PeopleSuggestion

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '7%',
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 27,
    marginTop: 5,
    textAlign: 'left',
    color: '#181D2D',
    marginBottom: 22
  },
})




