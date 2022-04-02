import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './profile-style'
import vertical from '../../../assets/lines/straight.png'
import profile_image from '../../../assets/icons/profile_image.png'
import followers from '../../../assets/icons/followers.png'
import booksReaded from '../../../assets/icons/books_readed.png'
import book from '../../../assets/icons/book.png'
import UserProfileBar from '../../components/user-profile-bar'
import DescriptionBar from '../../components/description-bar'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useProfile from './use-profile'

const UserProfile = ({ navigation }) => { 
  const { setProfile } = useAuthDispatch()
  const { profile } = useAuthState()

  const [books, setBooks] = useState({
    state: false,
    reading_books: [],
    reading_books_count: 0,
    read_books: [],
    read_books_count: 0,
    to_read:  [],
    to_read_count: 0,
    groups: [],
    groups_count: 0,
    image_reading: undefined,
    image_read: undefined,
    image_to_read: undefined,
  })

  useEffect(() => {
    useProfile({setProfile, profile, setBooks})
  }, [])


  if (!books.state) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <UserProfileBar navigation={navigation}/>
      <ScrollView>
        <View style={styles.standard}>
          <View style={styles.segment}>
            <Image source={profile_image} style={styles.profileSize} />
            <Image source={followers} style={styles.imageSize} />
            <Text style={styles.infos}>
              Seguidores
            </Text>
            <Image source={booksReaded} style={styles.imageSize}/>
            <Text style={styles.infos}>
              Livros Lidos
            </Text>
            <DescriptionBar description={profile.description} />
            <Image source={vertical} style={styles.horizontalLine} />
          </View>
          <View style={styles.segment}>
            <Text style={styles.bold}>
              Grupos
            </Text>
            <Text style={styles.normal}>
              nome Grupo
            </Text>
            <Text style={styles.normal}>
              X membros
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image source={book} style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyGroups')}>
              <Text style={styles.seeMore}>
              Ver mais(X)
              </Text>
            </TouchableOpacity>  
            <Text style={styles.bold}>
              Lendo
            </Text>
            <Text style={styles.normal}>
              {books.to_read[0].nome}
            </Text>
            <Text style={styles.normal}>
              Autor
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image source={{uri: books.image_reading}} style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookReading')}>
              <Text style={styles.seeMore}>
                {books.reading_books_count > 1 ? ' Ver mais (' + books.reading_books_count - 1 + ')': 'Ver mais'} 
              </Text>
            </TouchableOpacity>  
            <Text style={styles.bold}>
              Lerei
            </Text>
            <Text style={styles.normal}>
              {books.to_read[0].nome}
            </Text>
            <Text style={styles.normal}>
              Autor
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image source={{uri: books.image_to_read}} style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookToRead')}>
              <Text style={styles.seeMore}>
                {books.to_read_count > 1 ? ' Ver mais (' + books.to_read_count - 1 + ')': 'Ver mais'} 
              </Text>
            </TouchableOpacity>  
            <Text style={styles.bold}>
              Lidos
            </Text>
            <Text style={styles.normal}>
              {books.read_books[0].nome}
            </Text>
            <Text style={styles.normal}>
              Autor
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image source={{uri: books.image_read}} style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookRead')}>
              <Text style={styles.seeMore}>
                {books.read_books > 1 ? ' Ver mais (' + books.read_books - 1 + ')': 'Ver mais'} 
              </Text>
            </TouchableOpacity>  
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfile