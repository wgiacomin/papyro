import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import safeView from '../../styles/safe-view'
import styles from './genre-style'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'
import progress from '../../../assets/buttons/progressGenre1.png'

const GenreSelection = ({ navigation }) => {

  const [image, setImage] = useState(AddButton)
  const [image1, setImage1] = useState(RemoveButton)
  const [image2, setImage2] = useState(AddButton)
  const [image3, setImage3] = useState(RemoveButton)

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

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.standard}>
        <View style={styles.segment}>
          <Text style={styles.title}>
              Gêneros Literários
          </Text>
          <Text style={styles.subtitle}>
              Para começar, gostaríamos de saber quais são os seus gêneros literários favoritos
          </Text>
        </View>
        <View style={styles.segment}>
          <Text style={styles.bold}>
              Romântico
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
              Romances de autores como Nickolas Spark, Nora Roberts entre outros       
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
        </View>
        <Image source={progress} style={styles.progress} />
        <View style={styles.buttonSegment}>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('GenreSelectionSec')}>
              <Image source={circleButton} style={styles.buttonSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.skip}>
            <View>
              <TouchableOpacity
                //direciona para o feed
                onPress={() => navigation.navigate('UserProfile')}
              >
                <Text style={styles.normal}>
                  Pular?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default GenreSelection