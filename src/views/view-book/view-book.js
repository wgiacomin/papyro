import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView } from 'react-native'
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
import image_mocked from '../../../assets/icons/image.png'
import like from '../../../assets/icons/like.png'
import comments from '../../../assets/icons/chat.png'
import editButton from '../../../assets/buttons/editButton.png'

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
              <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                <Text style={styles.star_number_resume}>
                (Avaliar)
                </Text>
              </TouchableOpacity> 
            </View>
            <View style={styles.line}>
              <Image source={horizontal} style={styles.horizontalLine} />
            </View>
          </View>
          <View>
            <Text style={styles.title}>
              Procurando Companhia?
            </Text>
            <View style={styles.group_and_people}>
              <TouchableOpacity>
                <Image source={groups} style={styles.group_image} />
              </TouchableOpacity>
              <Text style={styles.group_title}>
                Grupos
              </Text>
              <TouchableOpacity>
                <Image source={profile} style={styles.person_image} />
              </TouchableOpacity>
              <Text style={styles.group_title}>
                Pessoas
              </Text>
            </View>
            <View style={styles.avaliations}>
              <Text style={styles.group_subtitle}>
                (15)
              </Text>
              <Text style={styles.person_subtitle}>
                (15)
              </Text>
            </View>
            <View style={styles.line}>
              <Image source={horizontal} style={styles.horizontalLine} />
            </View>
          </View>
          <View>
            <Text style={styles.comments_title}> 402 avaliações </Text>
          </View>
          <View style={styles.edit_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}>
              <Image source={editButton} style={styles.editButton}/>
            </TouchableOpacity>
          </View> 
          {
            mocks.map((item, key) => {
              return (
                <>
                  <View style={styles.comment_title}>
                    <TouchableOpacity>
                      <Image source={image_mocked} style={styles.user_image}/>  
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.person}>Júlia</Text>
                    </TouchableOpacity>
                    <View style={styles.star_container_comments}>
                      <Image source={full_star} style={styles.star_comments}/> 
                      <Image source={full_star} style={styles.star_comments}/> 
                      <Image source={full_star} style={styles.star_comments}/> 
                      <Image source={full_star} style={styles.star_comments}/> 
                      <Image source={star} style={styles.star_comments}/> 
                    </View>
                  </View>
                  <View style={styles.book_description_container}>
                    <Text style={styles.book_description}>{item.texto_abreviado}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Comments')}
                    >
                      <Text style={styles.see_more}>Ver mais</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.footer}>
                    <Text style={styles.date}>20/05/2021</Text>
                    <View style={styles.like_and_comments}>
                      <TouchableOpacity style={styles.buttons}>
                        <Image source={like} style={styles.icons}/>
                        <Text style={styles.icon_text}>5</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttons}
                        onPress={() => navigation.navigate('Comments')}>
                        <Image source={comments} style={styles.icons}/>
                        <Text style={styles.icon_text}>10</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.line}>
                    <Image source={horizontal} style={styles.horizontalLine} />
                  </View>
                </>
              )
            }
            )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default ViewBook


let mocks = [{
  'id': 1,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
]