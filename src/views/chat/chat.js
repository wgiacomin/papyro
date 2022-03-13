import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, StyleSheet } from 'react-native'
class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  })
  
  state = {
    messages: [],
  }
   
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
      />
    )
  }
}

const styles = StyleSheet.create({})

export default Chat