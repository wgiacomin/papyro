import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, TextInput } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './review-style'
import DefaultBar from '../../components/default-bar-back'
import full_star from '../../../assets/icons/full_star.png'
import star from '../../../assets/icons/star.png'
import bookImage from '../../../assets/icons/mocked_book_big.png'


const Review = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>
            O que você achou de...
          </Text>
        </View>
        <View style={styles.book_segment}>
          <View style={styles.image_segment}>
            <Image source={bookImage} style={styles.bookImage}/>
          </View>
          <Text style={styles.book_title}>
              Sankofa: A Novel
          </Text>
          <Text style={styles.book_autor}>
              Chibundu Onuzo
          </Text>
          <View style={styles.star_container}>
            <Image source={star} style={styles.star}/> 
            <Image source={star} style={styles.star}/> 
            <Image source={star} style={styles.star}/> 
            <Image source={star} style={styles.star}/> 
            <Image source={star} style={styles.star}/> 
          </View>
          <Text style={styles.star_number}>
              sua nota
          </Text>
        </View>
        <View style={styles.comment_segment}>
          <TextInput style={styles.comment} 
            placeholder='(Opcional) Espaço para sua avaliação'
            multiline
            maxLength={5000}
          />
        </View>
        <Text style={styles.max_length}>
            0/5000
        </Text>
        <View style={styles.buttonSegment}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewBook')}>
            <View style={styles.buttonSaveSegment}>
              <Text style={styles.buttonSave}> Salvar </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewBook')}>
            <View style={styles.buttonCancelSegment}>
              <Text style={styles.buttonCancel}> Cancelar </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
     
  )
}


export default Review