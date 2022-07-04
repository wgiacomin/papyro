import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import safeView from '../../styles/safe-view'
import image_mocked from '../../../assets/icons/image.png'
import DefaultBar from '../../components/default-bar-back'
import like from '../../../assets/icons/like.png'
import horizontal from '../../../assets/lines/straight.png'
import send from '../../../assets/buttons/send.png'
import Rate from '../../components/rate-stars'
import { useAuthDispatch, useAuthState } from '../../context/auth-context'
import spinner from '../../styles/spinner'
import useComment from './use-comment'

const Comment = ({ navigation, route }) => {
  const [comments, setComment] = useState({
    loading: true,
    comments: [],
    review: {},
    reviewer: {}
  })
  const [show, setShow ] = useState(false)
  const { profile } = useAuthState()

  useEffect(() => {
    useComment({setComment, id: route.params.id})
  }, [])
    
  if (comments.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <ScrollView>
          <View style={styles.title}>
            <TouchableOpacity>
              <Image source={{uri: comments.reviewer.photo}} style={styles.person_image}/>  
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.person}>{comments.reviewer.nickname}</Text>
            </TouchableOpacity>
            <Text style={styles.post_type}>avaliou o livro:</Text>
          </View>
          <View style={styles.container_book}>
            <Image source={{uri: comments.review.book.cover}} style={styles.book_image}/>
            <View style={styles.container_book_title}>
              <View>
                <Text style={styles.book_title}>{comments.review.book.name}</Text>
                <Text style={styles.book_subtitle}>{comments.review.book.author}</Text>
              </View>
              <View style={styles.star_container}>
                <Rate stars={comments.review.rate} style={styles.star} />
              </View>
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
            </View>
          </View>
          <Text style={styles.text}>
            {comments.review.review}
          </Text>
          <View style={styles.footer}>
            <Text style={styles.date}>{comments.review.date}</Text>
            <View style={styles.like_and_comments}>
              <TouchableOpacity style={styles.buttons}>
                <Image source={like} style={styles.icons}/>
                <Text style={styles.icon_text}>{comments.review.likes}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line}>
            <Image source={horizontal} style={styles.horizontalLine} />
          </View>
          <View>
            <Text style={styles.number_comments}>{comments.comments.length} comentário(s)</Text>
          </View>
          {
            mocks.map((item, key) => {
              return (
                <>
                  <View style={styles.title}>
                    <TouchableOpacity>
                      <Image source={image_mocked} style={styles.person_image}/>  
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.person}>Júlia</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.text}>
                    {item.texto_abreviado}
                  </Text>
                  <View style={styles.footer}>
                    <Text style={styles.date}>20/05/2021</Text>
                    <View style={styles.like_and_comments}>
                      <TouchableOpacity style={styles.buttons}>
                        <Image source={like} style={styles.icons}/>
                        <Text style={styles.icon_text}>5</Text>
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
          <Text style={styles.end_of_file}>
            Fim dos comentários
          </Text>
        </ScrollView>
      </View>
      <View style={styles.text_input_container}>
        <View style={styles.text_input_segment}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Comentar'
            style={styles.textInput}
            autoCompleteType='name'
          />
        </View>
        <View style={styles.send}>
          <Image source={send} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Comment


const styles = StyleSheet.create({
  send:{
    alignSelf: 'center',
    marginRight: 10,
    width: 23,
    height: 23
  },
  text_input_container: {
    backgroundColor: '#dcdcdc',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  text_input_segment: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 15,
    flex: 1,
    marginRight: '5%'
  },
  text_input: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
    letterSpacing: -0.2,
    height: 30,
    color: '#dcdcdc'
  },
  end_of_file: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#C3C3C4',
    marginTop: 15,
    marginBottom: 15
  },
  number_comments: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#181D2D'
  },
  container: {
    flex: 1,
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%'
  },
  person_image:{
    width: 32,
    height: 32,
    borderRadius: 25
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    marginTop: 10
  },
  person: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 5,
    paddingRight: 5,
  },
  post_type:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 27,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  line:{
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  data: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
  },
  icons: {
    width: 20,
    height: 20
  },
  icon_text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 13,
    paddingLeft: 5,
    paddingRight: 15
  },
  star:{
    width: 19,
    height: 19,
  },
  star_container: {
    flex: 1,
    flexDirection: 'row',
    
  },
  book_image: {
    maxWidth: 80,
    height: 120,
    width: 80,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 15,
  },
  container_book: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_book_title:{
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: '-10%',
  },
  book_title: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center'
  },
  book_subtitle: {
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: 10
  },
  want_to_read_container: {
    margin: 15,
    marginBottom: 20,
    flex: 1,
    alignItems: 'center'
  },
  want_to_read: {
    backgroundColor: '#324A59',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    textAlign: 'center',
    width: 121,
    height: 31,
  },
  want_to_read_list: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    width: 120,
    height: 30,
    textAlign: 'center',
    marginTop: 4,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 10
  },
  like_and_comments: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  date:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
})

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




