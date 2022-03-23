import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import mocked_image from '../../../assets/icons/image.png'
import add_button_list from '../../../assets/icons/add_button_list'
import delete_button_list from '../../../assets/icons/delete_button_list'
import horizontal from '../../../assets/lines/straight.png'

// eslint-disable-next-line react/prop-types
const Entry = ({group, note, commom_books, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.note_container}>
          <Text style={styles.note}>{note}</Text>
        </View>
        <TouchableOpacity>
          <Image source={mocked_image} style={styles.group_image}/>
        </TouchableOpacity>
        <View style={styles.group_block}>
          <View style={styles.group_title_container}>
            <TouchableOpacity>
              <Text style={styles.group_title}>{group}</Text>
            </TouchableOpacity>
            <View style={styles.commom_books_container}>
              <Text style={styles.commom_books}>{commom_books}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.button_segment}>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image source={add_button_list} style={styles.button_size}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={delete_button_list} style={styles.button_size}/>
          </TouchableOpacity>
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
  group: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  group_image: {
    width: 62,
    height: 60
  },
  group_block:{
    marginLeft: 10
  },
  group_title:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 31,
  },
  group_title_container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  commom_books:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 16,
  },
  commom_books_container: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: -9
  },
  note:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 16,
  },
  note_container: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: -9
  },
  line:{
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  horizontalLine: {
    marginLeft: 0,
    width: '100%',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button_segment: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  button_size:{
    width: 24,
    height: 24
  }
})
  
export default Entry