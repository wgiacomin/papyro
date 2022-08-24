import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Image, TouchableOpacity, Text, TextInput, ActivityIndicator, FlatList } from 'react-native'
import safeView from '../../styles/safe-view'
import BackButton from '../../components/back-button'
import horizontal from '../../../assets/lines/straight.png'
import send from '../../../assets/buttons/send.png'
import Rate from '../../components/rate-stars'
import spinner from '../../styles/spinner'
import useComment from './use-comment'
import Entry from './entry'
import Like from '../../components/heart'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import READ_TYPE from '../../enum/READ_TYPE'

const Comment = ({ navigation, route }) => {
  const [comments, setComment] = useState({
    loading: true,
    comments: [],
    book: {},
    review: {},
    reviewer: {}
  })

  useEffect(() => {
    useComment({ setComment, id: route.params.id })
  }, [])

  function setNewState({ newState }) {
    setComment({ ...comments, book: { ...comments.book, status: newState } })
  }

  if (comments.loading) {
    return (
      <View style={[spinner.container, spinner.horizontal]}>
        <ActivityIndicator size="large" color="#00000" />
      </View>
    )
  }

  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.title}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Friend', { id: comments.reviewer.id })}
                >
                  <Image source={{ uri: comments.reviewer.photo }} style={styles.person_image} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Friend', { id: comments.reviewer.id })}
                >
                  <Text style={styles.person}>{comments.reviewer.nickname}</Text>
                </TouchableOpacity>
                <Text style={styles.post_type}>avaliou o livro:</Text>
              </View>
              <View style={styles.container_book}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ViewBook', { id: comments.book.id })}
                >
                  <Image source={{ uri: comments.book.cover }} style={styles.book_image} />
                </TouchableOpacity>
                <View style={styles.container_book_title}>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ViewBook', { id: comments.book.id })}
                    >
                      <Text style={styles.book_title}>{comments.book.book_title}</Text>
                    </TouchableOpacity>
                    <Text style={styles.book_subtitle}>{comments.book.author}</Text>
                  </View>
                  <Rate stars={comments.review.rate} size={24} />
                  <View style={styles.want_to_read_container}>
                    <Menu>
                      <MenuTrigger>
                        <Text style={comments.book.status == 0 ? styles.want_to_read : styles.want_to_read_list}> {READ_TYPE[comments.book.status]} </Text>
                      </MenuTrigger>
                      <MenuOptions style={styles.options_color}>
                        <MenuOption onSelect={() => setNewState({ newState: 0 })} text={READ_TYPE[0]} disabled={comments.book.status == 0} />
                        <MenuOption onSelect={() => setNewState({ newState: 1 })} text={READ_TYPE[1]} disabled={comments.book.status == 1} />
                        <MenuOption onSelect={() => setNewState({ newState: 2 })} text={READ_TYPE[2]} disabled={comments.book.status == 2} />
                        <MenuOption onSelect={() => setNewState({ newState: 3 })} text={READ_TYPE[3]} disabled={comments.book.status == 3} />
                      </MenuOptions>
                    </Menu>
                  </View>
                </View>
              </View>
              <Text style={styles.text}>
                {comments.review.review}
              </Text>
              <View style={styles.footer}>
                <Text style={styles.date}>{comments.review.date}</Text>
                <View style={styles.like_and_comments}>
                  <Like liked={comments.review.you_liked} size={20} likes={comments.review.likes} type={'r'} id={comments.review.id} />
                </View>
              </View>
              <View style={styles.line}>
                <Image source={horizontal} style={styles.horizontalLine} />
              </View>
              <View>
                <Text style={styles.number_comments}>{comments.comments.length} comentário(s)</Text>
              </View>
            </>
          }
          ListFooterComponent={
            <Text style={styles.end_of_file}>
              Fim dos comentários
            </Text>
          }
          data={comments.comments}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
          renderItem={(post) => {
            return <Entry
              data={post.item}
              navigation={navigation}
              reviewer={comments.reviewer}
            />
          }} />
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
  options_color: {
    borderColor: '#dcdcdc',
  },
  send: {
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
  person_image: {
    width: 32,
    height: 32,
    borderRadius: 25,
    marginRight: 5
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    marginTop: 15
  },
  person: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 5,
    paddingRight: 5,
  },
  post_type: {
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
  line: {
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
  book_image: {
    maxWidth: 80,
    height: 120,
    width: 80,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  container_book: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_book_title: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 5
  },
  book_title: {
    fontFamily: 'Poppins',
    fontSize: 22,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 15
  },
  book_subtitle: {
    fontFamily: 'Poppins',
    fontSize: 14,
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
    color: 'black'
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 17,
    marginTop: 10
  },
  like_and_comments: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  date: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
})
