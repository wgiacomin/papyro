import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, GENDERS } from '@env'

async function updateGenre({ id, mode }) {
  if (BRANCH == 'dev' & GENDERS == 1) {
    return
  }

  await api.patch(ROUTES.update_genre + `${id}/${mode}`)
    .then((response) => {
      return
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      return
    })
}

export default updateGenre