import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './personalize-profile-style'
import DefaultBar from '../../components/default-bar'
import AddButton from '../../../assets/buttons/addButton.png'
import RemoveButton from '../../../assets/buttons/removeButton.png'

const PersonalizeProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar/>
      </View>
      <View style={styles.standard}>
        <View style={styles.textSegment}>
          <Text style={styles.title}>
              Personalizar Gêneros Literários
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
          <Text style={styles.bold}>
              Filosofia
          </Text>
          <View style={styles.buttonSegment2}>
            <View style={styles.continueSegment2}>
              <TouchableOpacity>
                <Image source={RemoveButton} style={styles.buttonSize2} />
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
      </View>
    </SafeAreaView>
  )
}


export default PersonalizeProfile