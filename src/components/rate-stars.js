import React from 'react'
import { Image, StyleSheet } from 'react-native'
import full_star from '../../assets/icons/full_star.png'
import star from '../../assets/icons/star.png'

const Rate = ({ stars, style }) => {
  let html_stars = []
  for (let index = 1; index <= 5; index++) {
    if (index <= stars) html_stars.push(<Image source={full_star} style={style ? style : styles.star}/>)
    else html_stars.push(<Image source={star} style={style ? style : styles.star}/>)
  }

  return(
    <>
      {html_stars}
    </>
  )

}

const styles = StyleSheet.create({
  star:{
    width: 14,
    height: 14,
  }
})
    

export default Rate