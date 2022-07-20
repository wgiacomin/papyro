import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import mocked_image from '../../../assets/icons/image.png'
import add_button_list from '../../../assets/icons/add_button_list.png'
import delete_button_list from '../../../assets/icons/delete_button_list.png'
import horizontal from '../../../assets/lines/straight.png'

// eslint-disable-next-line react/prop-types
const Entry = ({nickname, commonBooks, commonGenre, comment, photo, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.note_container}>
        <Text style={styles.note}>{comment > 0 ? `Você e ${nickname} deram a mesma nota em ${comment} livros.` : `Você e ${nickname} ainda não interagiram.`}</Text>
      </View>
      <View style={styles.name}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Friend')}>
          <Image source={{ uri: photo }} style={styles.person_image}/>
        </TouchableOpacity>
        <View style={styles.name_block}>
          <View style={styles.name_title_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.name_title}>{nickname}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.commom_container}>
            <Text style={styles.commom}>{commonBooks > 0 ? `${commonBooks} livros em comum.` : null}</Text>
            <Text style={styles.commom}>{commonGenre > 0 ? `${commonGenre} gêneros em comum.` : null}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}>
        <Image source={horizontal} style={styles.horizontalLine} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  person_image: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  name_block:{
    marginLeft: 10
  },
  name_title:{
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    marginRight: 100,
    marginTop: -3
  },
  name_title_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  commom:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
  },
  commom_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  note:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#BFB4B4'
  },
  note_container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 5
  },
  line:{
    flex: 1,
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
  },
})
  
export default Entry