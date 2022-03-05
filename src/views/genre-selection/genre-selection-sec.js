import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './genre-style'
import circleButton from '../../../assets/buttons/circleButton.png'
import BackButton from '../../components/back-button'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'
import progress from '../../../assets/buttons/progressGenre2.png'

const GenreSelection = ({ navigation }) => {
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
              <TouchableOpacity>
                <Image source={AddButton} style={styles.buttonSize2} />
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
              <TouchableOpacity>
                <Image source={AddButton} style={styles.buttonSize2} />
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
              <TouchableOpacity>
                <Image source={AddButton} style={styles.buttonSize2} />
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
              <TouchableOpacity>
                <Image source={RemoveButton} style={styles.buttonSize2} />
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
              onPress={() => navigation.navigate('Feed')}>
              <Image source={circleButton} style={styles.buttonSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.skip}>
            <View>
              <TouchableOpacity
              //direciona para o feed
                onPress={() => navigation.navigate('Feed')}
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