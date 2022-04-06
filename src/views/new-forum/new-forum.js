import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, TextInput } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './new-forum-style'
import BackButton from '../../components/back-button'
import vertical from '../../../assets/lines/straight.png'
import search from '../../../assets/icons/search.png'


const NewForum = ({ navigation }) => { 
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.back_button}>
          <BackButton navigation={navigation}/>
        </View>
        <Text style={styles.title}>
          Leitores CWB
        </Text>
      </View>
      <View>
        <Image source={vertical} style={styles.HorizontalLine} />
      </View>
      <View style={styles.standard}>
        <Text style={styles.name}> Título: </Text>          
        <View style={styles.name_segment}>
          <TextInput style={styles.name_input} 
            placeholder='Nome do grupo'
          />
        </View>
        <Text style={styles.name}> Tags: </Text>   
        <View style={styles.spoiler_forun_segment}>
          <Text style={styles.spoiler_title}>Spoiler</Text>
        </View>       
        <View style={styles.tag_segment}>
          <TextInput style={styles.tag_input} 
            placeholder='Buscar Tag'
            autoCompleteType='name'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.search_segment}>
            <Image source={search} style={styles.search}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}> Livro: </Text>
        <View style={styles.book_forun_segment}>
          <Text style={styles.book_title}>Admirável Mundo Novo</Text>
        </View>          
        <View style={styles.tag_segment}>
          <TextInput style={styles.tag_input} 
            placeholder='Buscar Livro'
            autoCompleteType='name'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.search_segment}>
            <Image source={search} style={styles.search}/>
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={styles.name}> Descrição: </Text> 
          <View style={styles.description_segment}>
            <TextInput style={styles.description_input} 
              placeholder='Escreva uma mensagem para o fórum!'
              multiline
              maxLength={5000}
              autoCompleteType='name'
              autoCapitalize='none'
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.button_segment}>
          <TouchableOpacity onPress={() => navigation.navigate('ViewForum')}>
            <View style={styles.buttonSegment}>
              <Text style={styles.button}> Salvar </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewForum