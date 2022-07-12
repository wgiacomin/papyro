import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Rate = ({ stars, size }) => {
  return(
    <View style={styles.star_container}>
      <MaterialIcons
        name={stars >= 1 ? 'star' : 'star-border'}
        size={size}
        color={stars >= 1 ? '#ffb300' :'#aaa'}
      />
      <MaterialIcons
        name={stars >= 2 ? 'star' : 'star-border'}
        size={size}
        color={stars >= 2 ? '#ffb300' :'#aaa'}
      />
      <MaterialIcons
        name={stars >= 3 ? 'star' : 'star-border'}
        size={size}
        color={stars >= 3 ? '#ffb300' :'#aaa'}
      />
      <MaterialIcons
        name={stars >= 4 ? 'star' : 'star-border'}
        size={size}
        color={stars >= 4 ? '#ffb300' :'#aaa'}
      />
      <MaterialIcons
        name={stars >= 5 ? 'star' : 'star-border'}
        size={size}
        color={stars >= 5 ? '#ffb300' :'#aaa'}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  star_container: {
    flex: 1,
    flexDirection: 'row',
    
  },
})
    

export default Rate