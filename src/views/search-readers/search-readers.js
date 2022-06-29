import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import styles from './search-readers-style'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import mocked_image from '../../../assets/icons/image.png'
import useSearchReaders from './use-search-readers'
import SearchReadersEntries from './search-readers-entries'
import spinner from '../../styles/spinner'
import ROUTES from '../../routes/routes'
import { ScrollView } from 'react-native-gesture-handler'

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

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <ScrollView>
        <View style={styles.container}>

          <DefaultBar navigation={navigation} />
          <View style={styles.segment}>

            <Text style={styles.title}>{readers.readers.readers_read.status}</Text>
            {/* <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata11</Text>
            </TouchableOpacity>
          </View> */}

            <SearchReadersEntries data={readers.readers.readers_read.list} navigation={navigation} />
          </View>

          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersList')}>
              <Text style={styles.see_more}> Ver mais </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersToRead')}>
              <Text style={styles.see_more}> Ver mais layout que estava</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.segment}>
            <Text style={styles.title}>{readers.readers.readers_to_read.status}</Text>
            <SearchReadersEntries data={readers.readers.readers_to_read.list} navigation={navigation} />
          </View>

          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersRead')}>
              <Text style={styles.see_more}> Ver mais</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.segment}>
            <Text style={styles.title}>{readers.readers.readers_reading.status}</Text>

            <SearchReadersEntries data={readers.readers.readers_to_read.list} navigation={navigation} />
          </View>

          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersRead')}>
              <Text style={styles.see_more}> Ver mais</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default SearchReaders

