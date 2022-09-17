import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, GET_BOOK } from '@env'


async function updateBookState({ id, status }) {
  if (status == null) {
    status = 0
  }
  if (BRANCH == 'dev' & GET_BOOK == 1) {
    return
  }

  await api.patch(ROUTES.user_book + `${id}/${status}`)
    .then((response) => {
      return
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      return
    })

}

export default updateBookState