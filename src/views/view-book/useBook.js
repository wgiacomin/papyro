import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import external_api from '../../routes/external_api'
import { Alert } from 'react-native'
import EXTERNALROUTES from '../../routes/external_routes'
import FIELDS from '../../routes/field_match'
import EXTERNAL_FIELDS from '../../routes/external_fields'

async function useGetBook({ setBook, id, setExternal }) {
  let key = ''
  await api.get(ROUTES.get_book + id).then((response) => {
    setBook({
      loading: false,
      error: false,
      book_info: response.data
    })
    key = response.data
  }).catch((error) => {
    setBook({
      loading: false,
      loading_book: false,
      error: true,
    })
    Alert.alert('Atenção', error.response.data.detail)
  })

  // await external_api.get(EXTERNALROUTES.books + key[FIELDS.key] + '.json').then((response) => {
  //   let description = response.data[EXTERNAL_FIELDS.description] ? response.data[EXTERNAL_FIELDS.description] : 'Ops, ainda não temos uma descrição!'
  //   if (Object.keys(description).length == 2) {
  //     description = description.value
  //   }
  //   setExternal({ loading: false, external_info: response.data, description })
  // }).catch((error) => {
  //   setExternal({
  //     loading: false,
  //     error: true,
  //   })
  // })
}

export default useGetBook