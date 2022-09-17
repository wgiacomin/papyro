import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, COMMENTS } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setComment, response, page, setRefreshing, setData, comments, new_refresh, setExtraInfo, setStatus }) {
  if (response.data.comments.length > 0) {
    if (new_refresh) {
      setStatus(response.data.book?.status)
      setExtraInfo({
        loading: false,
        book: response.data.book,
        review: response.data.review,
        reviewer: response.data.reviewer
      })
      setComment(response.data.comments)
    } else {
      setComment([...comments, ...response.data.comments])
    }
    setData({ loading: false, page: page + 1 })
  } else {
    if (page == 0) {
      setStatus(response.data.book?.status)
      setExtraInfo({
        loading: false,
        book: response.data.book,
        review: response.data.review,
        reviewer: response.data.reviewer
      })
    }
    setData({ page, loading: false })
  }
  setRefreshing(false)
}

async function useComment({ id, setComment, setData, page, refreshing, setRefreshing, comments, new_refresh, setExtraInfo, setStatus }) {
  if (page == null) {
    return
  }
  if (BRANCH == 'dev' & COMMENTS == 1) {
    setValues({ setComment, response: CONTRACTS.comments.success })
    return
  }

  await api.get(ROUTES.comments + id, { params: { page } }).then((response) => {
    if (!refreshing) {
      setRefreshing(true)
      setValues({ setComment, response, page, setRefreshing, setData, comments, new_refresh, setExtraInfo, setStatus })
    }
  }).catch((error) => {
    Alert.alert('Atenção', error.response.detail)
    setData({ loading: false })
  })
}


export default useComment