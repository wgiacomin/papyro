import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './view-group-style'
import DefaultBar from '../../components/default-bar'
import bookImage from '../../../assets/icons/mocked_book_big.png'
import configButton from '../../../assets/buttons/configButton.png'
import seeMoreButton from '../../../assets/icons/see_more_options.png'
import addButton from '../../../assets/icons/add_button_list.png'
import horizontal from '../../../assets/lines/straight.png'
import like from '../../../assets/icons/like.png'
import comments from '../../../assets/icons/chat.png'


const ViewGroup = ({ navigation }) => {

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <ScrollView>
        <View style={styles.standart}>
          <DefaultBar navigation={ navigation }/>
          <View style={styles.segment}>
            <TouchableOpacity>
              <Text style={styles.group_title}> Leitores CWB </Text>
            </TouchableOpacity>
            <Text style={styles.group_subtitle}> 220 Membros </Text>
            <View style={styles.edit_segment}>
              <TouchableOpacity>
                <Image source={seeMoreButton} style={styles.seeMoreButton}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('EditGroup')}>
                <Image source={configButton} style={styles.configButton}/>
              </TouchableOpacity>
            </View> 
          </View>
          <View style={styles.line}>
            <Image source={horizontal} style={styles.horizontalLine} />
          </View>
          <View style={styles.book_segment}>
            <Text style={styles.enquete_title}> Enquete de leitura de dezembro </Text>
            <Text style={styles.enquete_subtitle}> encerra em 25/11/2021 </Text>
            <View style={styles.book_container}>
              <Image source={bookImage} style={styles.bookImage}/>
              <Image source={bookImage} style={styles.bookImage}/> 
              <Image source={bookImage} style={styles.bookImage}/> 
              <Image source={bookImage} style={styles.bookImage}/> 
              <Image source={bookImage} style={styles.bookImage}/>
            </View>
            <View style={styles.button_segment}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ViewBook')}>
                <View style={styles.buttonSegment}>
                  <Text style={styles.button}> Participar </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ViewBook')}>
                <View style={styles.buttonSegment}>
                  <Text style={styles.button}> Enquetes Finalizadas </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.line}>
              <Image source={horizontal} style={styles.horizontalLine} />
            </View>
          </View>
          <View style={styles.reading_segment}>
            <Text style={styles.reading_title}> Livro atual: Admiravel mundo novo, Aldous Huxley </Text>
            <Text style={styles.reading_subtitle}> de 01/10 até 20/10 </Text>
            <Text style={styles.reading_forun}> Foruns desse livro: </Text>
            <View style={styles.add_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('NewForum')}>
                <Image source={addButton} style={styles.addButton}/>
              </TouchableOpacity>
            </View>
            {
              mocks.map((item, key) => {
                return (
                  <>
                    <View style={styles.container}>
                      <View style={styles.comment_title}>
                        <View style={styles.see_more_segment}>
                          <TouchableOpacity onPress={() => navigation.navigate('ViewForum')}>
                            <Image source={seeMoreButton} style={styles.seeMoreButton}/>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.forun_title}>{item.title}</Text>
                        <View style={styles.tag_segment}>
                          <View style={styles.book_forun_segment}>
                            <Text style={styles.book_title}>{item.book}</Text>
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
            <View style={styles.line}>
              <Image source={horizontal} style={styles.horizontalLine} />
            </View>
          </View>
          <View style={styles.forun_segment}>
            <Text style={styles.reading_title}> Foruns: </Text>
            {
              mocks.map((item, key) => {
                return (
                  <>
                    <View style={styles.container}>
                      <View style={styles.comment_title}>
                        <View style={styles.see_more_segment}>
                          <TouchableOpacity onPress={() => navigation.navigate('ViewForum')}>
                            <Image source={seeMoreButton} style={styles.seeMoreButton}/>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.forun_title}>{item.title}</Text>
                        <View style={styles.tag_segment}>
                          <View style={styles.book_forun_segment}>
                            <Text style={styles.book_title}>{item.book}</Text>
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
          </View>
          <View style={styles.button_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('NewForum')}>
              <View style={styles.buttonSegment}>
                <Text style={styles.button}> Criar </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default ViewGroup


let mocks = [{
  'id': 1,
  'title': 'Iniciando',
  'book': 'Sankofa: A Novel',
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
]