import React, { useEffect } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import safeView from '../../styles/safe-view'
import styles from './view-book-style'
import DefaultBar from '../../components/default-bar-back'
import shareButton from '../../../assets/icons/share.png'
import horizontal from '../../../assets/lines/straight.png'
import profile from '../../../assets/icons/profile.png'
import image_mocked from '../../../assets/icons/image.png'
import like from '../../../assets/icons/like.png'
import comments from '../../../assets/icons/chat.png'
import editButton from '../../../assets/buttons/editButton.png'
import FIELDS from '../../routes/field_match'
import spinner from '../../styles/spinner'
import EXTERNALROUTES from '../../routes/external_routes'
import EXTERNAL_FIELDS from '../../routes/external_fields'
import Rate from '../../components/rate-stars'
import useGetBook from './useBook'


const ViewBook = ({ navigation, route }) => {
  const [show, setShow] = useState(false)

  const [external, setExternal] = useState({
    loading: true,
    error: false,
    external_info: {}
  })

  const [book, setBook] = useState({
    book: [],
    loading: false,
  })

  useEffect(() => {
    useGetBook({ id: route.params?.id, setBook })
  }, [])

  if (book.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }
  console.log(book)

  return (

    <SafeAreaView style={safeView.AndroidSafeArea}>
      <ScrollView>
        <View style={styles.standart}>
          <DefaultBar navigation={navigation} />

          {/* <View style={styles.segment}>
            <Text style={styles.gender_title}>
              Gênero: {external.external_info[EXTERNAL_FIELDS.genre][0]}
            </Text>
            <View style={styles.share_segment}>
              <TouchableOpacity>
                <Image source={shareButton} style={styles.shareButton} />
              </TouchableOpacity>
            </View>
          </View> */}

          <View style={styles.book_segment}>
            <Text style={styles.book_title}>
              {book}
            </Text>
            {/* <Text style={styles.book_autor}>
              {book.[FIELDS.author][0][FIELDS.name]}
            </Text>
            <View style={styles.star_container}>
              <Rate stars={book.[FIELDS.rate]} style={styles.star} />
            </View>
            <Text style={styles.star_number}>
              ({book.[FIELDS.rates].length})
            </Text>
            <Image source={{ uri: EXTERNALROUTES.cover + book.book_info[FIELDS.cover] + '.jpg' }} style={styles.bookImage} /> */}
          </View>
          {/*
          <View style={styles.resume_segment}>
            <Text style={styles.resume}>
              {external.description}
            </Text>
            <View style={styles.want_to_read_container}>
              <TouchableOpacity
                onPress={() => { setShow(!show) }}>
                <Text style={styles.want_to_read}> Quero Ler </Text>
              </TouchableOpacity>
              {
                show ? (
                  <View>
                    <Text style={styles.want_to_read_list}>Quero Ler</Text>
                    <Text style={styles.want_to_read_list}>Não Ler</Text>
                  </View>
                ) : null
              }
            </View>
            <View style={styles.star_container_resume}>
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
            <View style={styles.company}>
              <TouchableOpacity onPress={() => navigation.navigate('SearchReaders')}>
                <Image source={profile} style={styles.person_image} />
              </TouchableOpacity>
              <Text style={styles.company_title}>
                Pessoas
              </Text>
            </View>
            <Text></Text>
            <View style={styles.line}>
              <Image source={horizontal} style={styles.horizontalLine} />
            </View>
          </View>
          <View>
            <Text style={styles.comments_title}> {book.book_info[FIELDS.rates].length} avaliações </Text>
          </View>
          <View style={styles.edit_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}>
              <Image source={editButton} style={styles.editButton} />
            </TouchableOpacity>
          </View>
          {
            book.book_info[FIELDS.rates].map((item, key) => {
              return (
                <>
                  <View style={styles.comment_title}>
                    <TouchableOpacity>
                      <Image source={image_mocked} style={styles.user_image} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.person}>{item.usuario[FIELDS.name]}</Text>
                    </TouchableOpacity>
                    <View style={styles.star_container_comments}>
                      <Rate stars={item[FIELDS.rate]} style={styles.star_comments} />
                    </View>
                  </View>
                  <View style={styles.book_description_container}>
                    <Text style={styles.book_description}>{item[FIELDS.text]}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Comments')}
                    >
                    </TouchableOpacity>
                  </View>
                  <View style={styles.footer}>
                    <Text style={styles.date}>{item[FIELDS.date].slice(0, 10)}</Text>
                    <View style={styles.like_and_comments}>
                      <TouchableOpacity style={styles.buttons}>
                        <Image source={like} style={styles.icons} />
                        <Text style={styles.icon_text}>{item[FIELDS.likes]}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttons}
                        onPress={() => navigation.navigate('Comments')}>
                        <Image source={comments} style={styles.icons} />
                        <Text>  </Text>
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
          } */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default ViewBook