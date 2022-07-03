import React, { useState, useRef } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, TextInput, StyleSheet, TouchableWithoutFeedback, ScrollView, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './review-style'
import bookImage from '../../../assets/icons/mocked_book_big.png'
import { MaterialIcons } from '@expo/vector-icons'
import spinner from '../../styles/spinner'
import useReview from './use-review'


const Review = ({ navigation }) => {
  const [starRating, setStarRating] = useState(null)
  const input_1 = useRef(null)
  const [characters, setCharacters] = useState(null)
  const [loading, setLoading] = useState(false)

  if (loading) {
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
          <View style={styles.segment}>
            <Text style={styles.title}>
            O que você achou de...
            </Text>
          </View>
          <View style={styles.book_segment}>
            <View style={styles.image_segment}>
              <Image source={bookImage} style={styles.bookImage}/>
            </View>
            <Text style={styles.book_title}>
              Sankofa: A Novel
            </Text>
            <Text style={styles.book_autor}>
              Chibundu Onuzo
            </Text>
            <View style={styles.star_container}>
              <View style={styles_star.stars}>
                <TouchableOpacity onPress={() => setStarRating(1)}>
                  <MaterialIcons
                    name={starRating >= 1 ? 'star' : 'star-border'}
                    size={26}
                    style={starRating >= 1 ? styles_star.starSelected : styles_star.starUnselected}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStarRating(2)}>
                  <MaterialIcons
                    name={starRating >= 2 ? 'star' : 'star-border'}
                    size={26}
                    style={starRating >= 2 ? styles_star.starSelected : styles_star.starUnselected}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStarRating(3)}>
                  <MaterialIcons
                    name={starRating >= 3 ? 'star' : 'star-border'}
                    size={26}
                    style={starRating >= 3 ? styles_star.starSelected : styles_star.starUnselected}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStarRating(4)}>
                  <MaterialIcons
                    name={starRating >= 4 ? 'star' : 'star-border'}
                    size={26}
                    style={starRating >= 4 ? styles_star.starSelected : styles_star.starUnselected}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStarRating(5)}>
                  <MaterialIcons
                    name={starRating >= 5 ? 'star' : 'star-border'}
                    size={26}
                    style={starRating >= 5 ? styles_star.starSelected : styles_star.starUnselected}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.star_number}>
              sua nota
              </Text>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => input_1.current.focus()}
          >
            <View style={styles.comment_segment}>
              <TextInput style={styles.comment} 
                ref={input_1}
                placeholder='Espaço para sua avaliação'
                multiline={true}
                maxLength={5000}
                onChangeText={(t) => setCharacters(t.length)}
                autoCapitalize='sentences'
                returnKeyType='done'
              />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.max_length}>
            {5000 - characters}
          </Text>
          <View style={styles.buttonSegment}>
            <TouchableOpacity
              onPress={() => useReview({navigation, data: starRating, setLoading})}>
              <View style={styles.buttonSaveSegment}>
                <Text style={styles.buttonSave}> Salvar </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewBook')}>
              <View style={styles.buttonCancelSegment}>
                <Text style={styles.buttonCancel}> Cancelar </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
     
  )
}

const styles_star = StyleSheet.create({
  stars: {
    display: 'flex',
    flexDirection: 'row',
    width: 26,
    height: 26,
  },
  starUnselected: {
    color: '#aaa',
  },
  starSelected: {
    color: '#ffb300',
  },
})

export default Review