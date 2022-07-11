import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setComment, response }) {
  setComment({ 
    comments: response.data.comments, 
    review: response.data.review,
    reviewer: response.data.reviewer,
    loading: false 
  })
}

async function useComment({ id, setComment }) {

  if (BRANCH == 'dev') {
    setValues({ setComment, response: CONTRACTS.comments.success })
    return
  }

  await api.get(ROUTES.get_review + id).then((response) => {
    setValues(response)
  }).catch((error) => {
    setComment({
      loading: false,
    })
    Alert.alert('Atenção', error.response.data.detail)
  })
}


export default useComment