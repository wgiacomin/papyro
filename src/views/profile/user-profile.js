import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './profile-style'
import vertical from '../../../assets/lines/straight.png'
import profile_image from '../../../assets/icons/profile_image.png'
import followers from '../../../assets/icons/followers.png'
import booksReaded from '../../../assets/icons/books_readed.png'
import UserProfileBar from '../../components/user-profile-bar'
import DescriptionBar from '../../components/description-bar'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useProfile from './use-profile'

const UserProfile = ({ navigation }) => { 

  const { profile } = useAuthState()

  const [data, setProfile] = useState({
    data: {},
    loading: true,
  })

  useEffect(() => {
    useProfile({setProfile, profile})
  }, [])

  if (data.loading) {
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
          <Image source={{uri:data.profile.photo}} style={styles.profileSize} />
        </View>
        <View style={styles.book_segment}>
          <Image source={followers} style={styles.imageSize} /> 
          <TouchableOpacity
            onPress={() => navigation.navigate('Seguidores')}>
            <Text style={styles.normal}>
              {data.profile.followers} Seguidores
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.book_segment}>  
          <Image source={booksReaded} style={styles.imageSize} />        
          <TouchableOpacity
            onPress={() => navigation.navigate('Livros')}>
            <Text style={styles.normal}>
                Ver Minha Biblioteca
            </Text>
          </TouchableOpacity>
        </View>
        <Image source={vertical} style={styles.horizontalLine} />
        <DescriptionBar description={data.profile.description} />
      </View>
    </SafeAreaView>
  )
}

export default UserProfile