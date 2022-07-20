import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import styles from './search-readers-style'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import spinner from '../../styles/spinner'
import ROUTES from '../../routes/routes'
import { ScrollView } from 'react-native-gesture-handler'
import useSearchReaders from './use-search-readers'
import BackButton from '../../components/back-button'

const SearchReaders = ({ navigation }) => {

  const [readers, setReaders] = useState({
    readers: [],
    loading: true,
  })

  useEffect(() => {
    useSearchReaders({ id: ROUTES.params?.id, setReaders })
  }, [])

  if (readers.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  function ListPeople(props) {
    return props.list.map((item) => {
      return (
        <>
          <View style={styles.people_segment}
            key={item.id}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={{ uri: item.photo }} style={styles.user_image} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>{item.nickname}</Text>
            </TouchableOpacity>
          </View>
        </>
      )
    }
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation}/>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.segment}>
            <Text style={styles.title}>{readers.readers.readers_read.status}</Text>
            <ListPeople list={readers.readers.readers_read.list} />
          </View>

          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersList')}>
              <Text style={styles.see_more}> Ver mais </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.segment}>
            <Text style={styles.title}>{readers.readers.readers_to_read.status}</Text>

            <ListPeople list={readers.readers.readers_reading.list} />

          </View>

          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersList')}>
              <Text style={styles.see_more}> Ver mais</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.segment}>
            <Text style={styles.title}>{readers.readers.readers_reading.status}</Text>

            <ListPeople list={readers.readers.readers_to_read.list} />

          </View>

          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersList')}>
              <Text style={styles.see_more}> Ver mais</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default SearchReaders

