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
    data: [],
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
              Lendo
            </Text>
            <Text style={styles.normal}>
              
            </Text>
            <Text style={styles.normal}>
              
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookReading')}>
              <Text style={styles.seeMore}>
                
              </Text>
            </TouchableOpacity>  
            <Text style={styles.bold}>
              Lerei
            </Text>
            <Text style={styles.normal}>
              
            </Text>
            <Text style={styles.normal}>
              
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookToRead')}>
              <Text style={styles.seeMore}>
               
              </Text>
            </TouchableOpacity>  
            <Text style={styles.bold}>
              Lidos
            </Text>
            <Text style={styles.normal}>
              
            </Text>
            <Text style={styles.normal}>
              
            </Text>
            <View style={styles.buttonSegment}>
              <View style={styles.continueSegment}>
                <Image style={styles.bookSize}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookRead')}>
              <Text style={styles.seeMore}>
                 
              </Text>
            </TouchableOpacity>  
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfile