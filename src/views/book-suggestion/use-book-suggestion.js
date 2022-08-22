import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKSUGGESTION } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBookSuggestion, response, page, setRefreshing, setData, bookSuggestion, new_refresh }) {
  if (response.data.data.length > 0) {
    if (new_refresh) {
      setBookSuggestion(response.data.data)
    } else {
      setBookSuggestion([...bookSuggestion, ...response.data.data])
    }

    setData({ loading: false, page: page + 1 })
  } else {
    setData({ page, loading: false })
  }
  setRefreshing(false)
}


async function useBookSuggestion({ setBookSuggestion, page, setRefreshing, setData, bookSuggestion, new_refresh, refreshing }) {
  if (BRANCH == 'dev' & BOOKSUGGESTION == 1) {
    setValues({ setBookSuggestion, response: CONTRACTS.book_suggestion.success })
    return
  }

  await api.get(ROUTES.book_suggestion, { params: { page } })
    .then((response) => {
      if (!refreshing) {
        setRefreshing(true)
        setValues({ setBookSuggestion, response, page, setRefreshing, setData, bookSuggestion, new_refresh })
      }
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setBookSuggestion({ loading: false })
    })
}


export default useBookSuggestion