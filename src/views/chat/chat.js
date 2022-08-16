import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet } from 'react-native'
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

export default Chat