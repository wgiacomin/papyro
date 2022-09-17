import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, ActivityIndicator, useWindowDimensions } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './edit-profile-style'
import vertical from '../../../assets/lines/straight.png'
import BackButton from '../../components/back-button'
import editPhotoButton from '../../../assets/buttons/editPhoto.png'
import personalizeButton from '../../../assets/buttons/personalizeButton.png'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useEditProfile from './use-edit-profile'
import uploadImageFromDevice from '../../utils/pics/upload-image-from-device'
import manageFileUpload from '../../utils/pics/manage-file-upload'
import getBlobFromUri from '../../utils/pics/get-blob-from-uri'
import uploadPic from './upload-pic'
import { Feather } from '@expo/vector-icons'


const EditProfile = ({ navigation, route }) => {
  const [imgURI, setImageURI] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [remoteURL, setRemoteURL] = useState('')
  const [error, setError] = useState(null)

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

  useEffect(() => {
    if (remoteURL != null & remoteURL != '') {
      uploadPic({ remoteURL, profile, setProfile })
    }
  }, [remoteURL])

  if (data.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  const handleLocalImageUpload = async () => {
    const fileURI = await uploadImageFromDevice()

    if (fileURI) {
      setImageURI(fileURI)
    }
  }

  const onStart = () => {
    setIsUploading(true)
  }

  const onProgress = (progress) => {
    setProgress(progress)
  }
  const onComplete = (fileUrl) => {
    setRemoteURL(fileUrl)
    setIsUploading(false)
    setImageURI(null)
    setEditProfile({ ...data, profile: { ...data.profile, 'photo': fileUrl } })

  }

  const onFail = (error) => {
    setError(error)
    setIsUploading(false)
  }

  const handleCloudImageUpload = async () => {
    if (!imgURI) return
    let fileToUpload = null
    const blob = await getBlobFromUri(imgURI)
    await manageFileUpload(blob, { onStart, onProgress, onComplete, onFail })
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
            <Image source={{ uri: imgURI == null ? data.profile.photo : imgURI }} style={styles.profileSize} />
            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={handleLocalImageUpload}>
                <Image source={editPhotoButton} style={styles.buttonSize} />
              </TouchableOpacity>
              <View style={{ paddingTop: 20, paddingLeft: 20 }}>
                {Boolean(imgURI) && (
                  <Feather
                    name="upload-cloud"
                    size={26}
                    color="black"
                    onPress={handleCloudImageUpload}
                  />
                )}
              </View>
            </View>
            <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
              {isUploading && (
                <Text style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}> {progress}% </Text>
              )}
            </View>
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
                  route.params?.reload(true)
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
  descriptionInput: {
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