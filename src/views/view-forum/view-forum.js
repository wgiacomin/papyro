import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './view-forum-style'
import BackButton from '../../components/back-button'
import vertical from '../../../assets/lines/straight.png'
import bookImage from '../../../assets/icons/mocked_book.png'
import like from '../../../assets/icons/like.png'
import comments from '../../../assets/icons/chat.png'
import { ScrollView } from 'react-native-gesture-handler'


const ViewForum = ({ navigation }) => { 
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
        <Text style={styles.name}> Fóruns do Livro: </Text>   
        <View style={styles.book_container}>
          <Image source={bookImage} style={styles.bookImage}/>
          <View style={styles.book_segment}>
            <Text style={styles.book_title}> Admirável Mundo Novo </Text>
            <Text style={styles.book_title}> Aldos Huxley </Text>
            <Text style={styles.book_data}> de 01/10 até 20/10 </Text>
            <Text style={styles.book_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin dolor et urna </Text>
          </View>
        </View>   
        <ScrollView>
          {
            mocks.map((item, key) => {
              return (
                <>
                  <View style={styles.mocks_container}>
                    <View style={styles.comment_title}>
                      <Text style={styles.forun_title}>{item.title}</Text>
                      <View style={styles.tag_segment}>
                        <View style={styles.book_forun_segment}>
                          <Text style={styles.book_title_mocks}>{item.book}</Text>
                        </View>
                        <View style={styles.spoiler_forun_segment}>
                          <Text style={styles.spoiler_title}>{item.spoiler}</Text>
                        </View>
                      </View>
                    </View>
                    <Text style={styles.user}>{item.user}</Text>
                    <View style={styles.footer}>
                      <View style={styles.like_and_comments}>
                        <TouchableOpacity style={styles.buttons}>
                          <Image source={comments} style={styles.icons}/>
                          <Text style={styles.icon_text}>{item.curtidas}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                          <Image source={like} style={styles.icons}/>
                          <Text style={styles.icon_text}>{item.comentarios}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </>
              )
            }
            )
          } 
        </ScrollView>   
        <View style={styles.button_segment}>
          <TouchableOpacity onPress={() => navigation.navigate('NewForum')}>
            <View style={styles.buttonSegment}>
              <Text style={styles.button}> Criar </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default ViewForum


let mocks = [{
  'id': 1,
  'title': 'Iniciando',
  'book': 'Admirável Mundo Novo',
  'spoiler': 'Spoiler',
  'user': 'Júlia Renata',
  'comentarios': 4,
  'curtidas': 9,
},
{
  'id': 2,
  'title': 'Capítulo 3 - que personagem chato!',
  'book': 'Admirável Mundo Novo',
  'spoiler': 'Spoiler',
  'user': 'Júlia Renata',
  'comentarios': 4,
  'curtidas': 9,
},
{
  'id': 3,
  'title': 'Capítulo 3 - que personagem chato!',
  'book': 'Admirável Mundo Novo',
  'spoiler': 'Spoiler',
  'user': 'Júlia Renata',
  'comentarios': 4,
  'curtidas': 9,
},
{
  'id': 4,
  'title': 'Capítulo 3 - que personagem chato!',
  'book': 'Admirável Mundo Novo',
  'spoiler': 'Spoiler',
  'user': 'Júlia Renata',
  'comentarios': 4,
  'curtidas': 9,
},
]