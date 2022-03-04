import React from 'react'
import { SafeAreaView, FlatList, Text, View, StyleSheet } from 'react-native'
import DefaultBar from '../../components/default-bar'
import safeView from '../../styles/safe-view'

const Feed = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar/>
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

export default Feed

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
},
{
  'id': 2,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'nome': 'Ana Dolata',
  'livro': 'Sankofa: A Novel',
  'tipo': 'review',
  'nota': 4,
  'comentarios': 5,
  'curtidas': 5,
  'texto_abreviado': 'Não concordo com você, Ana',
  'data': '20/05/2021',
  'foto': '../../../assets/icons/Nickname.png'
},
]




