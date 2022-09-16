import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './edit-profile-style'
import vertical from '../../../assets/lines/straight.png'
import BackButton from '../../components/back-button'
import editPhotoButton from '../../../assets/buttons/editPhoto.png'
import personalizeButton from '../../../assets/buttons/personalizeButton.png'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useEditProfile from './use-edit-profile'
import ImagePicker from 'react-native-image-picker'
import { launchImageLibrary } from 'react-native-image-picker'

const EditProfile = ({ navigation }) => {
  const { profile } = useAuthState()
  const { setProfile } = useAuthDispatch()
  const { logout } = useAuthDispatch()

  const [data, setEditProfile] = useState({
    profile: {},
    loading: true,
  })

  useEffect(() => {
    setEditProfile({ loading: false, profile })
  }, [])

  if (data.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  function imageCallback(data){
    console.log(data)
  }

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
            <Image source={{ uri: data.profile.photo }} style={styles.profileSize} />
            <TouchableOpacity
              onPress={() => launchImageLibrary(ImagePicker.photo, imageCallback())}>
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
                    onChangeText={text => setEditProfile({ ...data, profile: { ...data.profile, 'name': text } })}
                    value={data.profile.name}
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
                    onChangeText={text => setEditProfile({ ...data, profile: { ...data.profile, 'nickname': text.replace(' ', '') } })}
                    value={data.profile.nickname}
                  />
                </View>
              </View>
            </View>
            
            <Text style={styles.normal}>
              Descrição
            </Text>
            <View>
              <View style={stylesInput.description_container}>
                <View style={stylesInput.description_segment}>
                  <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline={true}
                    maxLength={200}
                    style={stylesInput.descriptionInput}
                    onChangeText={text => setEditProfile({ ...data, profile: { ...data.profile, 'description': text } })}
                    value={data.profile.description}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Personalize')}>
              <Image source={personalizeButton} style={styles.buttonSizeEdit} />
            </TouchableOpacity>
            <View style={styles.buttonSegment}>
              <TouchableOpacity
                onPress={() => {
                  useEditProfile({ setEditProfile, data: data.profile, setProfile })
                  navigation.goBack()
                }}>
                <View style={styles.continueSegment}>
                  <Text style={styles.buttonSave}> Salvar </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => logout()}>
                <View style={styles.logoutSegment}>
                  <Text style={styles.buttonLogout}> Logout </Text>
                </View>
              </TouchableOpacity>
            </View>
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
  description_container: {
    borderRadius: 20,
    width: 296,
    height: 100,
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
  descriptionInput:{
    width: 266,
    height: 266,
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#000000',
    marginTop: 9,
    marginLeft: 10,
    marginRight: 12, 
    marginBottom: 20,
    textAlignVertical: 'top'
  },
  segment: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  },
  description_segment: {
    flex: 1,
    marginTop: 5,
  }
})


export default EditProfile