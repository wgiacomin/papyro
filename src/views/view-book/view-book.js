import React from 'react'
import { Text, TextInput, SafeAreaView, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useState } from 'react'
import safeView from '../../styles/safe-view'
import styles from './view-book-style'
import DefaultBar from '../../components/default-bar-back'
import bookImage from '../../../assets/icons/mocked_book_big.png'
import shareButton from '../../../assets/icons/share.png'
import full_star from '../../../assets/icons/full_star.png'
import star from '../../../assets/icons/star.png'
import horizontal from '../../../assets/lines/straight.png'
import groups from '../../../assets/icons/groups.png'
import profile from '../../../assets/icons/profile.png'

const ViewBook = ({ navigation }) => {
  const [show, setShow ] = useState(false)

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <ScrollView>
        <View style={styles.standart}>
          <DefaultBar navigation={ navigation }/>
          <View style={styles.segment}>
            <Text style={styles.gender_title}>
              Gênero: Modernos
            </Text>
            <View style={styles.share_segment}>
              <TouchableOpacity>
                <Image source={shareButton} style={styles.shareButton}/>
              </TouchableOpacity>
            </View> 
          </View>
          <View style={styles.book_segment}>
            <Text style={styles.book_title}>
              Sankofa: A Novel
            </Text>
            <Text style={styles.book_autor}>
              Chibundu Onuzo
            </Text>
            <View style={styles.star_container}>
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={star} style={styles.star}/> 
            </View>
            <Text style={styles.star_number}>
              (402)
            </Text>
            <Image source={bookImage} style={styles.bookImage}/>
          </View>
          <View style={styles.resume_segment}>
            <Text style={styles.resume}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...
            </Text>
            <View style={styles.want_to_read_container}>
              <TouchableOpacity 
                onPress={() => {setShow(!show)}}>
                <Text style={styles.want_to_read}> Quero Ler </Text>    
              </TouchableOpacity>
              {
                show ? (
                  <View>
                    <Text style={styles.want_to_read_list}>Não Ler</Text>
                    <Text style={styles.want_to_read_list}>Não Ler</Text>
                  </View>
                ) : null 
              } 
            </View>
            <View style={styles.star_container_resume}>
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={full_star} style={styles.star}/> 
              <Image source={star} style={styles.star}/> 
            </View>
            <Text style={styles.star_number_resume}>
              (Avaliar)
            </Text>
            <View style={styles.line}>
              <Image source={horizontal} style={styles.horizontalLine} />
            </View>
          </View>
          <View>
            <Text style={styles.title}>
              Procurando Companhia?
            </Text>
            <Image source={groups} style={styles.image} />
            <Text style={styles.image_normal}>
              Grupos
            </Text>
            <Text style={styles.image_normal_number}>
              (15)
            </Text>
          </View>
          <View>
            <Image source={profile} style={styles.image} />
            <Text style={styles.image_normal}>
              Pessoas
            </Text>
            <Text style={styles.image_normal_number}>
              (2)
            </Text>
            <View style={styles.line}>
              <Image source={horizontal} style={styles.horizontalLine} />
            </View>
          </View>
          <View>
            <Text style={styles.title}>
              402 avaliações
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default ViewBook