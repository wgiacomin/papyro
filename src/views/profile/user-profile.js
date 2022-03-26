import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
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
import useProfile from './use-profile'
import spinner from '../../styles/spinner'


const UserProfile = ({ navigation }) => { 
  const { setProfile } = useAuthDispatch()
  const { profile } = useAuthState()

  const [res, setRes] = useState({
    status: 0,
  })

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
  })

  useEffect(() => {
    setRes({...res, description: profile.description})
    useProfile({setRes, setProfile, profile, setBooks})
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
          <DescriptionBar description={res.description} setRes={setRes}/>
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
            {books.groups_count} membros
          </Text>
          <View style={styles.buttonSegment}>
            <View style={styles.continueSegment}>
              <Image source={book} style={styles.bookSize}/>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyGroups')}>
            <Text style={styles.seeMore}>
              {books.groups_count > 1 ? ' Ver mais (' + books.groups_count - 1 + ')': ''}
            </Text>
          </TouchableOpacity>  
          <Text style={styles.bold}>
              Lendo
          </Text>
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <View style={styles.buttonSegment}>
            <View style={styles.continueSegment}>
              <Image source={book} style={styles.bookSize}/>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookReading')}>
            <Text style={styles.seeMore}>
              {books.reading_books_count > 1 ? ' Ver mais (' + books.reading_books_count - 1 + ')': ''} 
            </Text>
          </TouchableOpacity>  
          <Text style={styles.bold}>
              Lerei
          </Text>
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <View style={styles.buttonSegment}>
            <View style={styles.continueSegment}>
              <Image source={book} style={styles.bookSize}/>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookToRead')}>
            <Text style={styles.seeMore}>
              {books.to_read_count > 1 ? ' Ver mais (' + books.to_read_count - 1 + ')': ''} 
            </Text>
          </TouchableOpacity>  
          <Text style={styles.bold}>
              Lidos
          </Text>
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <View style={styles.buttonSegment}>
            <View style={styles.continueSegment}>
              <Image source={book} style={styles.bookSize}/>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookRead')}>
            <Text style={styles.seeMore}>
              {books.read_books > 1 ? ' Ver mais (' + books.read_books - 1 + ')': ''} 
            </Text>
          </TouchableOpacity>  
        </View>
      </View>
    </SafeAreaView>
  )
}

export default UserProfile