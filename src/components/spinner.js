
import React from 'react'
import {View, ActivityIndicator } from 'react-native'
import spinner from '../styles/spinner'

const Spinner = () => {
  <View style={[spinner.container, spinner.horizontal]}>
    <ActivityIndicator size="large" color="#00000" />
  </View>
}

export default Spinner