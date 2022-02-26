import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './profile-style'
import vertical from '../../../assets/lines/straight.png'
import profile from '../../../assets/icons/profileImage.png'
import followers from '../../../assets/icons/followers.png'
import booksReaded from '../../../assets/icons/booksReaded.png'
import book from '../../../assets/icons/book.png'
import BackButton from '../../components/back-button'
import editButton from '../../../assets/buttons/editButton.png'
import msgButton from '../../../assets/buttons/messagesButton.png'

const UserProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <TouchableOpacity
        onPress={() => navigation.navigate('GenreSelection')}>
        <Image source={editButton} style={styles.buttonEdit} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('GenreSelection')}>
        <Image source={msgButton} style={styles.buttonMsg} />
      </TouchableOpacity>
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
              Meu Perfil
          </Text>
          <Image source={vertical} style={styles.verticalLine} />
        </View>
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
          <Text style={styles.normal}>
              Descrição bla bla bla
          </Text>
          <Image source={vertical} style={styles.verticalLine} />
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Grupos
          </Text>
          <Image source={book} style={styles.bookSize}/>
          <Text style={styles.normal}>
              nome Grupo
          </Text>
          <Text style={styles.normal}>
              X membros
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('GenreSelection')}>
            <Text style={styles.seeMore}>
              Ver mais(X)
            </Text>
          </TouchableOpacity>  
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Lendo
          </Text>
          <Image source={book} style={styles.bookSize}/>
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('GenreSelection')}>
            <Text style={styles.seeMore}>
              Ver mais(X)
            </Text>
          </TouchableOpacity>  
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Lerei
          </Text>
          <Image source={book} style={styles.bookSize}/>
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('GenreSelection')}>
            <Text style={styles.seeMore}>
              Ver mais(X)
            </Text>
          </TouchableOpacity>  
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Lidos
          </Text>
          <Image source={book} style={styles.bookSize}/>
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('GenreSelection')}>
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