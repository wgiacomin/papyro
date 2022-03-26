import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './edit-profile-style'
import vertical from '../../../assets/lines/straight.png'
import profile_image from '../../../assets/icons/profile_image.png'
import BackButton from '../../components/back-button'
import EditProfileBar from '../../components/edit-profile-bar'
import editPhotoButton from '../../../assets/buttons/editPhoto.png'
import personalizeButton from '../../../assets/buttons/personalizeButton.png'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'

// async function useEditProfile({ setRes, setProfile, profile }){
//   await api.put(ROUTES.edit_profile, {}).then((response) => {
    
//   }
//   ).catch((error) => {

//   })
// }

const EditProfile = ({ navigation }) => {
  const { setProfile } = useAuthDispatch()
  const { profile } = useAuthState()

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.barSegment}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>
              Editar Perfil
          </Text>
        </View>
      </View>
      <View>
        <Image source={vertical} style={styles.HorizontalLine} />
      </View>
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Image source={profile_image} style={styles.profileSize} />
          <TouchableOpacity
            onPress={() => navigation.navigate('People')}>
            <Image source={editPhotoButton} style={styles.buttonSize} />
          </TouchableOpacity>
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Geral
          </Text>
          <Text style={styles.normal}>
              Nome Completo
          </Text>
          <EditProfileBar content={profile.name}/>
          <Text style={styles.normal}>
              Nome do Usuário
          </Text> 
          <EditProfileBar content={profile.nickname}/>
          <Text style={styles.normal}>
              Data de Nascimento
          </Text>
          <EditProfileBar content={profile.birthday}/>
          <Text style={styles.normal}>
              Descrição
          </Text>  
          <EditProfileBar content={profile.description}/>
          <TouchableOpacity
            onPress={() => navigation.navigate('Personalize')}>
            <Image source={personalizeButton} style={styles.buttonSizeEdit} />
          </TouchableOpacity> 
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Dados da Conta
          </Text>
          <Text style={styles.normal}>
              Email
          </Text>
          <EditProfileBar/>
          <Text style={styles.normal}>
              Senha
          </Text> 
          <EditProfileBar/>
          <Text style={styles.normal}>
              Confirmar Senha
          </Text>
          <EditProfileBar/>
          <TouchableOpacity
            onPress={() => navigation.navigate('People')}>
            <View style={styles.continueSegment}>
              <Text style={styles.buttonSave}> Salvar </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default EditProfile