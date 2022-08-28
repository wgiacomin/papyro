import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './genre-style'
import BackButton from '../../components/back-button'
import useGenre from './use-genre-selection'
import circleButton from '../../../assets/buttons/circleButton.png'
import Entry from './entry'
import spinner from '../../styles/spinner'

const GenreSelection = ({ navigation }) => {
  const [genre, setGenre] = useState({
    genre: [],
    loading: true,
  })

  useEffect(() => {
    useGenre({ setGenre })
  }, [])

  if (genre.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
            Gêneros Literários
          </Text>
        </View>
        <View style={styles.scrollSegment}>
          <Text style={styles.subtitle}>
            Para começar, gostaríamos de saber quais são os seus gêneros literários favoritos
          </Text>
        </View>
        <FlatList
          data={genre.genre}
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
            return <Entry item={post.item} />
          }} />
      </View>
    </SafeAreaView>
  )
}


export default GenreSelection