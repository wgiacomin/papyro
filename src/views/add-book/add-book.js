import React from 'react'
import { Text, TextInput, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './add-book-style'
import DefaultBar from '../../components/default-bar-back'
import bookImage from '../../../assets/icons/simple_image.png'

const AddBook = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.standart}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>
              Adicionar um Livro
          </Text>
        </View>
        <View style={styles.containerISBN}>
          <View style={styles.inputSegment}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='ISBN'
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.searchSegment}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Feed')}>
            <Text style={styles.button}> Buscar </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.inputSegment}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Título '
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.inputSegment}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Autor '
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.containerSinopse}>
          <View style={styles.inputSegment}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Sinopse  '
              style={styles.textInputSinopse}
            />
          </View>
        </View>
        <View style={styles.buttonSegment}>
          <View style={styles.capeSegment}>
            <Image source={bookImage} style={styles.bookSize} />
          </View>
          <View style={styles.cape}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddBook')}
            >
              <Text style={styles.textImage}>
                  Carregar Capa
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continueSegment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Feed')}>
              <Text style={styles.button}> Salvar </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default AddBook