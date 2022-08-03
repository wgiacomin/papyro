import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './friend-profile-style'
import vertical from '../../../assets/lines/straight.png'
import followers from '../../../assets/icons/followers.png'
import booksReaded from '../../../assets/icons/books_readed.png'
import followButton from '../../../assets/buttons/followButton.png'
import followingButton from '../../../assets/buttons/followingButton.png'
import talkButton from '../../../assets/buttons/talkButton.png'
import UserProfileBar from '../../components/friend-profile-bar'
import DescriptionBar from '../../components/description-bar'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useProfile from './use-profile'

const FriendProfile = ({ navigation }) => {

  const [image, setImage] = useState(followButton)

  const handleClick = () => {
    if(image == followButton){
      setImage(followingButton)
    }else{
      setImage(followButton)
    }
  }

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
      <UserProfileBar navigation={navigation} profile={data.profile.nickname}/>
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
        <DescriptionBar description={data.profile.description}/>
        <TouchableOpacity 
          onPress={handleClick}
          style={styles.follow_segment}>
          <Image source={image} style={styles.followButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.talk_segment}>
          <Image source={talkButton} style={styles.talkButton} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


export default FriendProfile