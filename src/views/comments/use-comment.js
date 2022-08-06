import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, COMMENTS } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setComment, response }) {
  setComment({ 
    comments: response.data.comments, 
    review: response.data.review,
    reviewer: response.data.reviewer,
    book: response.data.book,
    loading: false 
  })
}

async function useComment({ id, setComment }) {

  if (BRANCH == 'dev' & COMMENTS == 1) {
    setValues({ setComment, response: CONTRACTS.comments.success })
    return
  }
  
  await api.get(ROUTES.comments + id).then((response) => {
    setValues({response, setComment})
  }).catch((error) => {
    setComment({
      loading: false,
    })
    Alert.alert('Atenção', error.response.data.detail)
  })
}


export default useComment