import React, { useState } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image , ScrollView, TextInput, StyleSheet} from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './edit-profile-style'
import vertical from '../../../assets/lines/straight.png'
import profile_image from '../../../assets/icons/profile_image.png'
import BackButton from '../../components/back-button'
import editPhotoButton from '../../../assets/buttons/editPhoto.png'
import personalizeButton from '../../../assets/buttons/personalizeButton.png'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import useEditProfile from './use-edit-profile'

const EditProfile = ({ navigation }) => {
  const { setProfile } = useAuthDispatch()
  const { profile } = useAuthState()

  const [ props, setProps ] = useState(profile)

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
      <ScrollView>
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
            <View>
              <View style={stylesInput.container}>
                <View style={stylesInput.segment}>
                  <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={stylesInput.textInput}
                    onChangeText={ value => setProps({...props, name: value})}
                    value={props.name}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.normal}>
              Nome do Usuário
            </Text> 
            <View>
              <View style={stylesInput.container}>
                <View style={stylesInput.segment}>
                  <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={stylesInput.textInput}
                    onChangeText={ value => setProps({...props, nickname: value})}
                    value={props.nickname}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.normal}>
              Data de Nascimento
            </Text>
            <View>
              <View style={stylesInput.container}>
                <View style={stylesInput.segment}>
                  <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={stylesInput.textInput}
                    onChangeText={ value => setProps({...props, birthday: value})}
                    value={props.birthday}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.normal}>
              Descrição
            </Text>  
            <View>
              <View style={stylesInput.container}>
                <View style={stylesInput.segment}>
                  <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={stylesInput.textInput}
                    onChangeText={ value => setProps({...props, description: value})}
                    value={props.description}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Personalize')}>
              <Image source={personalizeButton} style={styles.buttonSizeEdit} />
            </TouchableOpacity> 
            <TouchableOpacity
              onPress={() => {
                useEditProfile({ setProfile, props, profile })
                navigation.goBack()
              }}>
              <View style={styles.continueSegment}>
                <Text style={styles.buttonSave}> Salvar </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const stylesInput = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 296,
    height: 28,
    flexDirection: 'row',
    backgroundColor: '#ECEBEB',
    marginLeft: 46
  },
  textInput: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'left',
    left: 18,
    color: '#000000',
    width: 266
  },
  segment:{
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  }
})


export default EditProfile