import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './personalize-profile-style'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import { ScrollView } from 'react-native-gesture-handler'
import spinner from '../../styles/spinner'
import useGender from './use-personalize'
import BackButton from '../../components/back-button'

const PersonalizeProfile = ({ navigation }) => {

  const [image, setImage] = useState(AddButton)
  const [image1, setImage1] = useState(RemoveButton)
  const [image2, setImage2] = useState(AddButton)
  const [image3, setImage3] = useState(RemoveButton)
  const [image4, setImage4] = useState(RemoveButton)
  const [image5, setImage5] = useState(RemoveButton)
  const [image6, setImage6] = useState(AddButton)
  const [image7, setImage7] = useState(RemoveButton)
  const [image8, setImage8] = useState(RemoveButton)
  const [image9, setImage9] = useState(RemoveButton)

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

  const handleClick5 = () => {
    if(image5 == AddButton){
      setImage5(RemoveButton)
    }else{
      setImage5(AddButton)
    }
  }

  const handleClick6 = () => {
    if(image6 == AddButton){
      setImage6(RemoveButton)
    }else{
      setImage6(AddButton)
    }
  }

  const handleClick7 = () => {
    if(image7 == AddButton){
      setImage7(RemoveButton)
    }else{
      setImage7(AddButton)
    }
  }

  const handleClick8 = () => {
    if(image8 == AddButton){
      setImage8(RemoveButton)
    }else{
      setImage8(AddButton)
    }
  }

  const handleClick9 = () => {
    if(image9 == AddButton){
      setImage9(RemoveButton)
    }else{
      setImage9(AddButton)
    }
  }

  const { profile } = useAuthState()

  const [genders, setGenders] = useState({
    genders: [],
    loading: true,
  })

  useEffect(() => {
    useGender({setGenders, profile})
  }, [])

  if (genders.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation}/>
      <View style={styles.standard}>
        <View style={styles.textSegment}>
          <Text style={styles.title}>
              Personalizar Gêneros Literários
          </Text>
        </View>
        <ScrollView>
          <View style={styles.segment}>
            <Text style={styles.bold}>
              {genders.genders[0].name}
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
              {genders.genders[0].description}     
            </Text>
            <Text style={styles.bold}>
              {genders.genders[1].name}
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
              {genders.genders[1].description}       
            </Text>
            <Text style={styles.bold}>
              {genders.genders[2].name}
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
              {genders.genders[2].description} 
            </Text>
            <Text style={styles.bold}>
              {genders.genders[3].name}
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
              {genders.genders[3].description}       
            </Text>
            <Text style={styles.bold}>
              {genders.genders[4].name}
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
              {genders.genders[4].description}       
            </Text>
            <Text style={styles.bold}>
              {genders.genders[5].name}
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick5}>
                  <Image source={image5} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              {genders.genders[5].description}        
            </Text>
            <Text style={styles.bold}>
              {genders.genders[6].name}
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick6}>
                  <Image source={image6} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              {genders.genders[6].description}        
            </Text>
            <Text style={styles.bold}>
              {genders.genders[7].name}
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick7}>
                  <Image source={image7} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              {genders.genders[7].description}        
            </Text>
            <Text style={styles.bold}>
              {genders.genders[8].name}
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick8}>
                  <Image source={image8} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              {genders.genders[8].description}        
            </Text>
            <Text style={styles.bold}>
              {genders.genders[9].name}
            </Text>
            <View style={styles.buttonSegment2}>
              <View style={styles.continueSegment2}>
                <TouchableOpacity
                  onPress={handleClick9}>
                  <Image source={image9} style={styles.buttonSize2} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              {genders.genders[9].description}        
            </Text>
          </View>
          <TouchableOpacity onPress={() => {
            useGender({ setGenders, profile })
            navigation.goBack()
          }}>
            <View style={styles.continueSegment}>
              <Text style={styles.buttonSave}> Salvar </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              useGender({ setGenders, profile })
              navigation.goBack()
            }}>
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