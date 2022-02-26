import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './profile-style'
import vertical from '../../../assets/lines/straight.png'
import profile from '../../../assets/icons/profileImage.png'
import followers from '../../../assets/icons/followers.png'
import booksReaded from '../../../assets/icons/booksReaded.png'
import BackButton from '../../components/back-button'
import EditButton from '../../components/editProfile-button'

const UserProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
              Meu Perfil
          </Text>
          <EditButton navigation={navigation}/>
          <Image source={vertical} style={styles.verticalLine} />
        </View>
        <View style={styles.segment}>
          <Image source={profile} />
          <Image source={followers} />
          <Text style={styles.normal}>
              Seguidores
          </Text>
          <Image source={booksReaded} />
          <Text style={styles.normal}>
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
          <Image source={booksReaded} />
          <Text style={styles.normal}>
              nome Grupo
          </Text>
          <Text style={styles.normal}>
              X membros
          </Text>
          <Text style={styles.normal}>
              Ver mais(X)
          </Text>
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Lendo
          </Text>
          <Image source={booksReaded} />
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <Text style={styles.normal}>
              Ver mais(X)
          </Text>
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Lerei
          </Text>
          <Image source={booksReaded} />
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <Text style={styles.normal}>
              Ver mais(X)
          </Text>
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Lidos
          </Text>
          <Image source={booksReaded} />
          <Text style={styles.normal}>
              Título
          </Text>
          <Text style={styles.normal}>
              Autor
          </Text>
          <Text style={styles.normal}>
              Ver mais(X)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default UserProfile