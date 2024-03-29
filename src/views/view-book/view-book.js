import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, FlatList, ActivityIndicator, Share } from 'react-native'
import safeView from '../../styles/safe-view'
import styles from './view-book-style'
import shareButton from '../../../assets/icons/share.png'
import horizontal from '../../../assets/lines/straight.png'
import profile from '../../../assets/icons/profile.png'
import spinner from '../../styles/spinner'
import Rate from '../../components/rate-stars'
import useGetBook from './use-book'
import BackButton from '../../components/back-button'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import READ_TYPE from '../../enum/READ_TYPE'
import Entry from './rate-entry'
import updateBookState from './update-book-state'


const ViewBook = ({ navigation, route }) => {
  const [book, setBook] = useState({
    book: {},
    loading: true,
  })

  const onShare = async () => {
    const share = await Share.share({
      message: 'passar a url/mensagem aqui'
    })
  }

  function setNewState({ newState }) {
    updateBookState({ id: book.book.id, status: newState })
    setBook({ ...book, book: { ...book.book, status: newState } })
  }

  useEffect(() => {
    useGetBook({ id: route.params?.id, setBook, navigation })
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
      <BackButton navigation={navigation} />
      <View style={styles.standart}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.segment}>
                <Text style={styles.gender_title}>
                  Gênero: <Text style={styles.underline}>{book.book.genre[0]}</Text>
                </Text>
                <View style={styles.share_segment}>
                  <TouchableOpacity onPress={onShare}>
                    <Image source={shareButton} style={styles.shareButton} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.book_segment}>
                <Image source={{ uri: book.book.cover }} style={styles.bookImage} />
                <View>
                  <Text style={styles.book_title}>
                    {book.book.book_title}
                  </Text>
                  <Text style={styles.book_autor}>
                    {book.book.author[0]}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Review', {
                    book_title: book.book.book_title,
                    author: book.book.author[0],
                    cover: book.book.cover,
                    id: book.book.id
                  })}>
                    <View style={styles.star_container_avaliation}>
                      <Rate stars={book.book.rate} size={26} />
                    </View>
                    <Text style={styles.star_number}>({book.book.raters})</Text>
                  </TouchableOpacity>
                </View>
              </View>


              <View style={styles.resume_segment}>
                <Text style={styles.resume}>
                  {book.book.description.replace(/(<([^>]+)>)/ig, '')}
                </Text>
                <View style={styles.want_to_read_container}>
                  <Menu>
                    <MenuTrigger>
                      <Text style={book.book.status == null ? styles.want_to_read : styles.want_to_read_list}> {READ_TYPE[book.book.status]} </Text>
                    </MenuTrigger>
                    <MenuOptions>
                      <MenuOption onSelect={() => setNewState({ newState: null })} text={READ_TYPE[null]} disabled={book.book.status == null} />
                      <MenuOption onSelect={() => setNewState({ newState: 1 })} text={READ_TYPE[1]} disabled={book.book.status == 1} />
                      <MenuOption onSelect={() => setNewState({ newState: 2 })} text={READ_TYPE[2]} disabled={book.book.status == 2} />
                      <MenuOption onSelect={() => setNewState({ newState: 3 })} text={READ_TYPE[3]} disabled={book.book.status == 3} />
                    </MenuOptions>
                  </Menu>
                </View>
              </View>

              <View>
                <Text style={styles.title}>
                  Procurando Companhia?
                </Text>
                <View style={styles.company}>
                  <TouchableOpacity onPress={() => navigation.navigate('Procurando Companhia?', { params: { id: route.params?.id } })}>
                    <Image source={profile} style={styles.person_image} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Procurando Companhia?', { params: { id: route.params?.id } })}>
                    <Text style={styles.company_title}>
                      Pessoas ({book.book.company})
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
                  {/* <Image source={editButton} style={styles.editButton} /> */}
                </TouchableOpacity>
              </View>
            </>
          }
          data={book.book.reviews}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
          refreshing={book.loading}
          onRefresh={() => {
            setBook({ ...book, loading: true })
            useGetBook({ id: route.params?.id, setBook, navigation })
          }}
          renderItem={(post) => <Entry navigation={navigation} post={post} />} />
      </View >
    </SafeAreaView >
  )
}


export default ViewBook