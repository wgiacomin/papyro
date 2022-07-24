import React, { Component, useEffect, useState } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, ActivityIndicator, Share, TouchableHighlightComponent } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './view-book-style'
import DefaultBar from '../../components/default-bar-back'
import shareButton from '../../../assets/icons/share.png'
import horizontal from '../../../assets/lines/straight.png'
import profile from '../../../assets/icons/profile.png'
import comments from '../../../assets/icons/chat.png'
import editButton from '../../../assets/buttons/editButton.png'
import spinner from '../../styles/spinner'
import Rate from '../../components/rate-stars'
import useGetBook from './useBook'
import Like from '../../components/heart'
import BackButton from '../../components/back-button'

const ViewBook = ({ navigation, route }) => {
  const [show, setShow] = useState(false)

  const [book, setBook] = useState({
    book: {},
    loading: true,
  })

  const onShare = async () => {
    const share = await Share.share({
      message: 'passar a url/mensagem aqui'
    })
  }

  const [clickedId, setClickedId] = useState(null)
  const handleClick = (id) => {
    book.book.book_status_user.id = id
    setClickedId(id)
  }

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

  return (

    <SafeAreaView style={safeView.AndroidSafeArea}>
      <ScrollView>
        <BackButton navigation={navigation}/>
        <View style={styles.standart}>
          <View style={styles.segment}>
            <Text style={styles.gender_title}>
              Gênero: <Text style={styles.underline}>{book.book.genre.name}</Text>
            </Text>
            <View style={styles.share_segment}>
              <TouchableOpacity onPress={onShare}>
                <Image source={shareButton} style={styles.shareButton} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.book_segment} blurRadius={5}>
            <Text style={styles.book_title}>
              {book.book.book_title}
            </Text>
            <Text style={styles.book_autor}>
              {book.book.author[0].name}
            </Text>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                <View style={styles.star_container_avaliation}>
                  <Rate stars={book.book.rate} size={24} />
                </View>
                <Text style={styles.star_number}>({book.book.rates.length})</Text>
              </TouchableOpacity>
            </View>

            <Image source={{ uri: book.book.cover }} style={styles.bookImage} />
          </View>
          

          <View style={styles.resume_segment}>
            <Text style={styles.resume}>
              {book.book.description}
            </Text>
            <View style={styles.want_to_read_container}>
              <TouchableOpacity
                onPress={() => { setShow(!show) }}>
                <Text style={styles.want_to_read}>Adicionar na Biblioteca</Text>
              </TouchableOpacity>
              {
                show ? (
                  book.book.book_status.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => handleClick(index)}
                        key={index}
                        style={[(index === book.book.book_status_user.id | index === clickedId) ? styles.selected : styles.unselected]}
                      >
                        <Text style={styles.want_to_read}>{item.status}</Text>
                      </TouchableOpacity>
                    )
                  })

                ) : null
              }
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
              <TouchableOpacity onPress={() => navigation.navigate('SearchReaders')}>
                <Text style={styles.company_title}>
									Pessoas ({book.book.raters})
                </Text>
              </TouchableOpacity>
            </View>
            <Text></Text>
            <View style={styles.line}>
              <Image source={horizontal} style={styles.horizontalLine} />
            </View>
          </View>

          <View>
            <Text style={styles.comments_title}> {book.book.reviews.length} avaliações </Text>
          </View>

          <View style={styles.edit_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Comments', { id: route.params?.id })}>
              <Image source={editButton} style={styles.editButton} />
            </TouchableOpacity>
          </View>

          {

            book.book.reviews.map((item) => {

              return (
                <>

                  <View style={styles.comment_title}
                    key={item.id}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('People')}>
                      <Image source={{ uri: item.user.photo }} style={styles.user_image} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('People')}>
                      <Text style={styles.person}>{item.user.nickname}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.star_container_comments}>
                    <Rate stars={item.rate} size={15} />
                  </View>

                  <View style={styles.book_description_container}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Comments', { id: route.params?.id })}>
                      <Text style={styles.book_description}>{item.text}</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.footer}>
                    <Text style={styles.date}>{item.date.slice(0, 10)}</Text>
                    <View style={styles.like_and_comments}>
                      <View>
                        <View style={styles.like_and_comments}>
                          <Like liked={item.you_liked} size={20} likes={item.likes} />
                        </View>
                      </View>

                      <TouchableOpacity style={styles.buttons}
                        onPress={() => navigation.navigate('Comments')}>
                        <Image source={comments} style={styles.icons} />
                        <Text style={styles.icon_text}> {item.comments} </Text>
                      </TouchableOpacity>
                    </View >
                  </View >
                  <View style={styles.line}>
                    <Image source={horizontal} style={styles.horizontalLine} />
                  </View>
                </>
              )
            }
            )
          }

        </View >
      </ScrollView >
    </SafeAreaView >
  )
}


export default ViewBook