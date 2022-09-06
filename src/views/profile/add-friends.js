import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PROFILE } from '@env'

async function addFriend({ id, mode }) {
  if (BRANCH == 'dev' & PROFILE == 1) {
    return
  }

  await api.post(ROUTES.get_following + `${id}/${mode}`)
    .then((response) => {
      return
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
    })
}

export default addFriend