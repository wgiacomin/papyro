import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './friend-profile-style'
import vertical from '../../../assets/lines/straight.png'
import profile from '../../../assets/icons/profile_image.png'
import followers from '../../../assets/icons/followers.png'
import booksReaded from '../../../assets/icons/books_readed.png'
import book from '../../../assets/icons/book.png'
import followButton from '../../../assets/buttons/followButton.png'
import talkButton from '../../../assets/buttons/talkButton.png'
import UserProfileBar from '../../components/friend-profile-bar'
import DescriptionBar from '../../components/description-bar'

const FriendProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <UserProfileBar navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Image source={profile} style={styles.profileSize} />
          <Image source={followers} style={styles.imageSize} />
          <Text style={styles.infos}>
              Seguidores
          </Text>
          <Image source={booksReaded} style={styles.imageSize}/>
          <Text style={styles.infos}>
              Livros Lidos
          </Text>
          <DescriptionBar />
          <TouchableOpacity style={styles.follow_segment}>
            <Image source={followButton} style={styles.followButton} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.talk_segment}>
            <Image source={talkButton} style={styles.talkButton} />
          </TouchableOpacity>
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
            onPress={() => navigation.navigate('GenreSelection')}>
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


export default FriendProfile