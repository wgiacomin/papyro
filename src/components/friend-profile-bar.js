import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import vertical from '../../assets/lines/straight.png'
import arrowButton from '../../assets/buttons/arrowButton.png'

const FriendProfileBar = ({ navigation, profile }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.segment}>
          <TouchableOpacity
            style={styles.backSegment}
            onPress={() => navigation.goBack()}>
            <Image source={arrowButton} style={styles.imageSize} />
          </TouchableOpacity>
          <View style={styles.titleSegment}>
            <Text style={styles.title}>
              {profile}
            </Text>
          </View>

        </View>
      </View>
      <View>
        <Image source={vertical} style={styles.HorizontalLine} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center'
  },
  imageSize: {
    width: 22,
    height: 22,
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  segment: {
    flexDirection: 'row',
    left: '5%',
  },
  backSegment: {
    left: '2%',
  },
  HorizontalLine: {
    alignSelf: 'center',
    height: 1,
    width: 360,
    marginBottom: 20,
    marginTop: -7
  },
  titleSegment: {
    flexDirection: 'row',
    left: '30%',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 32,
    lineHeight: 48,
    color: '#181D2D',
    marginTop: '-6%'
  }
})

export default FriendProfileBar