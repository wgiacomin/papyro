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
import ROUTES from '../../routes/routes'
import api from '../../routes/api'

async function useProfile({ setRes, setProfile }){
  await api.get(ROUTES.profile + '0').then((response) => {
    setRes({
      nickname:  response.data.apelido,
      description:  response.data.descricao,
      name:  response.data.nome,
      status: response.status,
    })

    setProfile({
      nickname: response.data.apelido, 
      description: response.data.descricao, 
      name: response.data.nome
    })
  }
  ).catch((error) => {
    setRes({
      status: error.response.status,
      msg: error.response.data.detail
    })
  })
}


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
              Ver mais(X)
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
              Ver mais(X)
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
              Ver mais(X)
              </Text>
            </TouchableOpacity>  
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfile