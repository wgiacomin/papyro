import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import FIELDS from '../../routes/field_match'

async function useProfile({ setProfile, profile, setBooks }){

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
      image_reading: response.data.livros_lendo[0].capa,
      image_read: response.data.livros_lidos[0].capa,
      image_to_read: response.data.livros_lerei[0].capa,
    })

  }).catch((error) => {
    setBooks({
      state: true,
    })
    Alert.alert('Atenção', error.response.data.detail)
  })

  await api.get(ROUTES.edit_profile).then((response) => {
    setProfile({
      ...profile,
      id: response.data.id,
      email: response.data[FIELDS.email],
      birthday: response.data[FIELDS.birthday],
      description:  response.data[FIELDS.description],
    })
  }
  ).catch((error) => {
    Alert.alert('Atenção', error.response.data.detail)
  })
}


export default useProfile
