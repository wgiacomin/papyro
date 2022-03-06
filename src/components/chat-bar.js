import React from 'react'
import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import profile from '../../assets/icons/options.png'
import search from '../../assets/icons/search.png'
import horizontal from '../../assets/lines/straight.png'
import arrowButton from '../../assets/buttons/arrowButton.png'

const ChatBar = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backSegment}
          onPress={() => navigation.goBack()}>
          <Image source={arrowButton} style={styles.imageSize} />
        </TouchableOpacity>
        <View style={styles.segment}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Usuários'
            style={styles.textInput}
            autoCompleteType='name'
          />
          <TouchableOpacity style={styles.search_segment}>
            <Image source={search} style={styles.search}/>
          </TouchableOpacity>
        </View>
        <View style={styles.icons_segment}>
          <TouchableOpacity style={styles.profile_segment}>
            <Image source={profile} style={styles.profile}/>
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
    height: 30,
  },
  backSegment:{
    left: 15,
  },
  imageSize: {
    width: 22,
    height: 22,
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  segment:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECEDF1',
    borderRadius: 10,
    alignItems: 'center',
    width: 251,
    left: 25
  },
  search_segment:{
    marginRight: '5%'
  },
  icons_segment:{
    flex: .26,
    flexDirection: 'row',
    marginLeft: '5%'
  },
  profile_segment:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: '30%'
  },
  profile:{
    width: 24,
    height: 24
  },
  search:{
    width: 16,
    height: 16
  },
  horizontalLine: {
    width: '100%',
    marginLeft: 0,
    height: 1,
    marginTop: 5,
    marginBottom: 5
  },
})
  
export default ChatBar