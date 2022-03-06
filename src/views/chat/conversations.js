import React from 'react'
import { Text, SafeAreaView, View, FlatList, StyleSheet} from 'react-native'
import safeView from '../../styles/safe-view'
import ChatBar from '../../components/chat-bar'

const Conversations = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <ChatBar/>
        <FlatList
          data={mocks}
          numColumns={1}
          renderItem={(post) => {
            return <Text>{post.item.nome}</Text>
          }}
        />
      </View>
    </SafeAreaView>
  )
}


export default Conversations

const styles = StyleSheet.create({
  container: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%'
  },
})

let mocks = [{
  'id': 1,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},]