import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, COMMENTS } from '@env'

async function useNewComment({ id, text, setNewComment }) {

  if (BRANCH == 'dev' & COMMENTS == 1) {
    return
  }

  await api.post(ROUTES.comments, {
    rate_id: id,
    text
  })
    .then((response) => {
      setNewComment(null)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      return
    })
}


export default useNewComment