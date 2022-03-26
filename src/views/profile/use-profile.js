import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

async function useProfile({ setRes, setProfile, profile, setBooks }){
  await api.get(ROUTES.profile + 0).then((response) => {
    setBooks({
      state: true,
      reading_books: response.data.livros_lendo,
      reading_books_count: response.data.livros_lendo.length,
      read_books: response.data.livros_lidos,
      read_books_count: response.data.livros_lidos.length,
      to_read: response.data.livros_lerei,
      to_read_count: response.data.livros_lerei.length,
      groups: response.data.grupos,
      groups_count: response.data.grupos.length,
    })

  }).catch((error) => {
    Alert.alert('Atenção', error.response.data.detail)
  })

  await api.get(ROUTES.edit_profile).then((response) => {
    setRes({
      description:  response.data.descricao,
      status: response.status,
    })
    setProfile({
      ...profile,
      id: response.data.id,
      email: response.data.email,
      birthday: response.data.data_nascimento
    })
  }
  ).catch((error) => {
    Alert.alert('Atenção', error.response.data.detail)
  })
}


export default useProfile
