import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, Alert } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './profile-style'
import vertical from '../../../assets/lines/straight.png'
import profile_image from '../../../assets/icons/profile_image.png'
import followers from '../../../assets/icons/followers.png'
import booksReaded from '../../../assets/icons/books_readed.png'
import book from '../../../assets/icons/book.png'
import UserProfileBar from '../../components/user-profile-bar'
import DescriptionBar from '../../components/description-bar'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'

async function useProfile({ setRes, setProfile, profile }){
  
  await api.get(ROUTES.edit_profile).then((response) => {
    setRes({
      description:  response.data.descricao,
      status: response.status,
    })
    setProfile({
      ...profile,
      id: response.data.id,
      email: response.data.email,
      birthday: response.data.data_nascimento
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
    description: '',
    msg: '' ,
  })

  useEffect(() => {
    setRes({...res, description: profile.description})
    useProfile({setRes, setProfile, profile})
  }, [])

  useEffect(() => {
    if (res.status > 300 & res.msg != ''){
      Alert.alert('Atenção!', res.msg)
    }
  }, [res])


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
    </SafeAreaView>
  )
}


export default UserProfile