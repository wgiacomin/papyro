import React from 'react'
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native'
import Entry from './entry'
import styles from './genre-style'
import circleButton from '../../../assets/buttons/circleButton.png'

// eslint-disable-next-line react/prop-types
const GenreEntries = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      numColumns={1}
      ListFooterComponent={
        <View style={styles.buttonSegment}>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Feed')
              }}>
              <Image source={circleButton} style={styles.buttonSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.skip}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Feed')}
              >
                <Text style={styles.normal}>
                  Pular?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
      renderItem={(post) => {
        return <Entry post={post} />
      } } />
  )
}


export default GenreEntries