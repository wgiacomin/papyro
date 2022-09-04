import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'
import safeView from '../../styles/safe-view'
import Entry from './entry'
import useCompanionship from './use-companionship'

const Company = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState({
    page: 0,
    loading: true,
  })

  const [readers, setCompanionship] = useState([])

  useEffect(() => {
    useCompanionship({ setData, page: 0, setRefreshing, refreshing, id: route.params?.id, id_status: route.params?.id_status, setCompanionship, readers, new_refresh: true })
  }, [])

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={readers}
          numColumns={1}
          onEndReached={() => {
            if (readers.length % 20 == 0 & readers.length > 0) {
              useCompanionship({ setData, page: data.page, setRefreshing, refreshing, id: route.params?.id, id_status: route.params?.id_status, setCompanionship, readers })
            }
          }}
          onEndReachedThreshold={.5}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useCompanionship({ setData, page: 0, setRefreshing, refreshing, id: route.params?.id, id_status: route.params?.id_status, setCompanionship, readers, new_refresh: true })
          }}
          ListEmptyComponent={() => <Text>Nenhum resultado!</Text>}
          renderItem={(post) => {
            return <Entry
              nickname={post.item.nickname}
              photo={post.item.photo}
              navigation={navigation}
            />
          }}
        />
      </View>
    </SafeAreaView>
  )
}


export default Company

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%',
    marginTop: -25,
  },
})

