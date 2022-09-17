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
import useNewComment from './use-new-comment'
import updateBookState from '../view-book/update-book-state'

const Comment = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [comments, setComment] = useState([])
  const [newComment, setNewComment] = useState(null)

  const [data, setData] = useState({
    page: 0,
    loading: true,
  })

  const [extraInfo, setExtraInfo] = useState({
    loading: true,
    book: {},
    review: {},
    reviewer: {}
  })

  const [status, setStatus] = useState(null)

  useEffect(() => {
    useComment({ setComment, page: 0, refreshing, setRefreshing, setData, comments, setExtraInfo, id: route.params.id, new_refresh: true, setStatus })
  }, [])


  function setNewState({ newState }) {
    updateBookState({ id: extraInfo.book.id, status: newState })
    setStatus(newState)
  }

  if (extraInfo.loading) {
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
                  onPress={() => navigation.navigate('Friend', { id: extraInfo.reviewer.id })}
                >
                  <Image source={{ uri: extraInfo.reviewer.photo }} style={styles.person_image} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Friend', { id: extraInfo.reviewer.id })}
                >
                  <Text style={styles.person}>{extraInfo.reviewer.nickname}</Text>
                </TouchableOpacity>
                <Text style={styles.post_type}>avaliou o livro:</Text>
              </View>
              <View style={styles.container_book}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ViewBook', { id: extraInfo.book.id })}
                >
                  <Image source={{ uri: extraInfo.book.cover }} style={styles.book_image} />
                </TouchableOpacity>
                <View style={styles.container_book_title}>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ViewBook', { id: extraInfo.book.id })}
                    >
                      <Text style={styles.book_title}>{extraInfo.book.book_title}</Text>
                    </TouchableOpacity>
                    <Text style={styles.book_subtitle}>{extraInfo.book.author}</Text>
                  </View>
                  <Rate stars={extraInfo.review.rate} size={24} />
                  <View style={styles.want_to_read_container}>
                    <Menu>
                      <MenuTrigger>
                        <Text style={status == null ? styles.want_to_read : styles.want_to_read_list}> {READ_TYPE[status]} </Text>
                      </MenuTrigger>
                      <MenuOptions style={styles.options_color}>
                        <MenuOption onSelect={() => setNewState({ newState: null })} text={READ_TYPE[null]} disabled={status == null} />
                        <MenuOption onSelect={() => setNewState({ newState: 1 })} text={READ_TYPE[1]} disabled={status == 1} />
                        <MenuOption onSelect={() => setNewState({ newState: 2 })} text={READ_TYPE[2]} disabled={status == 2} />
                        <MenuOption onSelect={() => setNewState({ newState: 3 })} text={READ_TYPE[3]} disabled={status == 3} />
                      </MenuOptions>
                    </Menu>
                  </View>
                </View>
              </View>
              <Text style={styles.text}>
                {extraInfo.review.text}
              </Text>
              <View style={styles.footer}>
                <Text style={styles.date}>{extraInfo.review.date}</Text>
                <View style={styles.like_and_comments}>
                  <Like liked={extraInfo.review.you_liked} size={20} likes={extraInfo.review.likes} type={'r'} id={extraInfo.review.id} />
                </View>
              </View>
              <View style={styles.line}>
                <Image source={horizontal} style={styles.horizontalLine} />
              </View>
              <View>
                <Text style={styles.number_comments}>{extraInfo.review.comments} comentário(s)</Text>
              </View>
            </>
          }
          ListFooterComponent={
            <Text style={styles.end_of_file}>
              Fim dos comentários
            </Text>
          }
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
          onEndReached={() => useComment({ setComment, page: data.page, refreshing, setRefreshing, setData, comments, id: route.params.id, setStatus })}
          onEndReachedThreshold={.5}
          ListEmptyComponent={() => <Text></Text>}
          refreshing={data.loading}
          onRefresh={() => {
            setData({ loading: true })
            useComment({ setComment, page: 0, refreshing, setRefreshing, setData, comments, new_refresh: true, id: route.params.id, setExtraInfo, setStatus })
          }}
          renderItem={(post) => {
            return <Entry
              data={post.item}
              navigation={navigation}
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
            value={newComment}
            onChangeText={text => setNewComment(text)}
          />
        </View>
        <View style={styles.send}>
          <TouchableOpacity
            onPress={() => useNewComment({ id: extraInfo.review.id, text: newComment, setNewComment })} >
            <Image source={send} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
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
