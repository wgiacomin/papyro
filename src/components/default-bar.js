import React from 'react'
import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import chat from '../../assets/icons/chat.png'
import profile from '../../assets/icons/options.png'
import search from '../../assets/icons/search.png'
import horizontal from '../../assets/lines/straight.png'

const DefaultBar = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Livros, autores ou ISBN'
            style={styles.textInput}
            autoCompleteType='name'
          />
          <TouchableOpacity style={styles.search_segment}
            onPress={() => navigation.navigate('Pesquisa')}
          >
            <Image source={search} style={styles.search} />
          </TouchableOpacity>
        </View>
        <View style={styles.icons_segment}>
          {/* <TouchableOpacity style={styles.chat_segment}
            onPress={() => navigation.navigate('Conversations')}
          >
            <Image source={chat} style={styles.chat}/>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.profile_segment}
            onPress={() => navigation.navigate('People')}
          >
            <Image source={profile} style={styles.profile} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={horizontal} style={styles.horizontalLine} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  textInput: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
    letterSpacing: -0.2,
    height: 30
  },
  imageSize: {
    width: 18,
    height: 18,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  segment: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECEDF1',
    borderRadius: 10,
    alignItems: 'center'
  },
  search_segment: {
    marginRight: '5%'
  },
  icons_segment: {
    flex: .15,
    flexDirection: 'row',
    marginLeft: '5%'
  },
  chat_segment: {
    flex: 1,
    flexDirection: 'row',
  },
  profile_segment: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '20%'
  },
  chat: {
    width: 25,
    height: 25
  },
  profile: {
    width: 24,
    height: 24
  },
  search: {
    width: 16,
    height: 16
  },
  horizontalLine: {
    width: '100%',
    marginLeft: 0,
    height: 1,
    marginBottom: 10
  },
})

export default DefaultBar