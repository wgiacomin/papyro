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
      <ScrollView>
        <View style={styles.standard}>
          <View style={styles.segment}>
            <Image source={{uri:data.profile.photo}} style={styles.profileSize} />
            <TouchableOpacity>
              <Image source={followers} style={styles.imageSize} />
              <Text style={styles.infos}>
                {data.profile.followers} Seguidores
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookRead')}>
              <Image source={booksReaded} style={styles.imageSize}/>
              <Text style={styles.infos}>
                {data.profile.booksQt} Livros Lidos
              </Text>
            </TouchableOpacity>
            <DescriptionBar description={data.profile.description}/>
            <TouchableOpacity 
              onPress={() => Alert.alert('','Você agora é amigo de Ana Luíza!')}
              style={styles.follow_segment}>
              <Image source={followButton} style={styles.followButton} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.talk_segment}>
              <Image source={talkButton} style={styles.talkButton} />
            </TouchableOpacity>
            <Image source={vertical} style={styles.horizontalLine} />
          </View>
          <View style={styles.segment}> 
            <Text style={styles.bold}>
              Lendo
            </Text>
            <Text style={styles.normal}>
              {data.profile.booksReading.name}
            </Text>
            <Text style={styles.normal}>
              {data.profile.booksReading.author.name}
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image source={{uri:data.profile.booksReading.cover}} style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookReading')}>
              <Text style={styles.seeMore}>
                Ver Mais ({data.profile.booksReading.booksReadingQtd})
              </Text>
            </TouchableOpacity>  
            <Text style={styles.bold}>
              Lerei
            </Text>
            <Text style={styles.normal}>
              {data.profile.booksToRead.name}
            </Text>
            <Text style={styles.normal}>
              {data.profile.booksToRead.author.name}
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image source={{uri:data.profile.booksToRead.cover}} style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookToRead')}>
              <Text style={styles.seeMore}>
                Ver Mais ({data.profile.booksToRead.booksToReadQtd})
              </Text>
            </TouchableOpacity>  
            <Text style={styles.bold}>
              Lidos
            </Text>
            <Text style={styles.normal}>
              {data.profile.booksRead.name}
            </Text>
            <Text style={styles.normal}>
              {data.profile.booksRead.author.name}
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image source={{uri:data.profile.booksRead.cover}} style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookRead')}>
              <Text style={styles.seeMore}>
                Ver Mais ({data.profile.booksRead.booksReadQtd})
              </Text>
            </TouchableOpacity>  
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default FriendProfile