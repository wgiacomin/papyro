import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './personalize-profile-style'
import DefaultBar from '../../components/default-bar-back'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import { ScrollView } from 'react-native-gesture-handler'
import spinner from '../../styles/spinner'
import useGender from './use-personalize'

const PersonalizeProfile = ({ navigation }) => {

  const [image, setImage] = useState(AddButton)
  const [image1, setImage1] = useState(RemoveButton)
  const [image2, setImage2] = useState(AddButton)
  const [image3, setImage3] = useState(RemoveButton)
  const [image4, setImage4] = useState(RemoveButton)

  const handleClick = () => {
    if(image == AddButton){
      setImage(RemoveButton)
    }else{
      setImage(AddButton)
    }
  }

  const handleClick1 = () => {
    if(image1 == AddButton){
      setImage1(RemoveButton)
    }else{
      setImage1(AddButton)
    }
  }

  const handleClick2 = () => {
    if(image2 == AddButton){
      setImage2(RemoveButton)
    }else{
      setImage2(AddButton)
    }
  }

  const handleClick3 = () => {
    if(image3 == AddButton){
      setImage3(RemoveButton)
    }else{
      setImage3(AddButton)
    }
  }

  const handleClick4 = () => {
    if(image4 == AddButton){
      setImage4(RemoveButton)
    }else{
      setImage4(AddButton)
    }
  }

  const { profile } = useAuthState()

  const [gender, setGender] = useState({
    genders: [],
    loading: false,
  })

  useEffect(() => {
    useGender({setGender, profile})
  }, [])

  if (gender.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
      </View>
      <View style={styles.standard}>
        <View style={styles.textSegment}>
          <Text style={styles.title}>
              Personalizar Gêneros Literários
          </Text>
        </View>
        <ScrollView>
          <View style={styles.segment}>
            <Text style={styles.bold}>
              {gender.genders}
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick}>
                  <Image source={image} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              {gender.genders}      
            </Text>
            <Text style={styles.bold}>
              Ficção Científica
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick1}>
                  <Image source={image1} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              Inclui autores como Isaac Asimov, Wilson Gibson e Frank Herbert       
            </Text>
            <Text style={styles.bold}>
              Clássicos de Época
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick2}>
                  <Image source={image2} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              Livros como Morro dos Ventos Uivantes, Orgulho e Preconceito ou ainda Crime e Castigo.      
            </Text>
            <Text style={styles.bold}>
              Infanto-Juvenis
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick3}>
                  <Image source={image3} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              Livros como Percy Jakson, Harry Potter ou ainda Jogos Vorazes.      
            </Text>
            <Text style={styles.bold}>
              Filosofia
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick4}>
                  <Image source={image4} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
             Inclui autores como  René Descasrtes, Karl Marx e Sócrates.      
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}>
            <View style={styles.continueSegment}>
              <Text style={styles.buttonSave}> Salvar </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}


export default PersonalizeProfile