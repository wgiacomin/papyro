import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, TextInput } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './edit-group-style'
import BackButton from '../../components/back-button'
import vertical from '../../../assets/lines/straight.png'


const EditGroup = ({ navigation }) => { 
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
        <Text style={styles.name}> Nome: </Text>          
        <View style={styles.name_segment}>
          <TextInput style={styles.name_input} 
            placeholder='Nome do grupo'
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.name}> Descrição: </Text> 
          <View style={styles.description_segment}>
            <TextInput style={styles.description_input} 
              placeholder='Descrição do grupo'
              multiline
              maxLength={5000}
            />
          </View>
        </View>
        <View style={styles.button_segment}>
          <TouchableOpacity onPress={() => navigation.navigate('ViewGroup')}>
            <View style={styles.buttonSegment}>
              <Text style={styles.button}> Salvar </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EditGroup