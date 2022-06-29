import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKSUGGESTION } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBookSuggestion, response }) {
  setBookSuggestion({ bookSuggestion: response.data.book_suggestion, loading: false })
}


async function useBookSuggestion({ bookSuggestion, setBookSuggestion }) {
  if (BRANCH == 'dev') {
    if (BOOKSUGGESTION == 1) {
      setBookSuggestion({
        status: CONTRACTS.book_suggestion.error.status,
        msg: CONTRACTS.book_suggestion.error.data.detail
      })
    } else {
      setValues({ setBookSuggestion, response: CONTRACTS.book_suggestion.success })
    }
    return
  }

  await api.get(ROUTES.book_suggestion)
    .then((response) => {
      setValues(setBookSuggestion, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setBookSuggestion({ loading: false })
    })
}


export default useBookSuggestion