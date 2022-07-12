import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKTOREAD } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBookToRead, response }) {
  setBookToRead({ bookToRead: response.data.book_toRead, loading: false })
}


async function useBookToRead({ bookToRead, setBookToRead }) {
  if (BRANCH == 'dev') {
    if (BOOKTOREAD == 1) {
      setBookToRead({
        status: CONTRACTS.book_toRead.error.status,
        msg: CONTRACTS.book_toRead.error.data.detail
      })
    } else {
      setValues({ setBookToRead, response: CONTRACTS.book_toRead.success })
    }
    return
  }

  await api.get(ROUTES.book_toRead)
    .then((response) => {
      setValues(setBookToRead, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setBookToRead({ loading: false })
    })
}


export default useBookToRead