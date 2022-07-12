import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKREAD } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBookRead, response }) {
  setBookRead({ bookRead: response.data.book_read, loading: false })
}


async function useBookRead({ bookRead, setBookRead }) {
  if (BRANCH == 'dev') {
    if (BOOKREAD == 1) {
      setBookRead({
        status: CONTRACTS.book_read.error.status,
        msg: CONTRACTS.book_read.error.data.detail
      })
    } else {
      setValues({ setBookRead, response: CONTRACTS.book_read.success })
    }
    return
  }

  await api.get(ROUTES.book_read)
    .then((response) => {
      setValues(setBookRead, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setBookRead({ loading: false })
    })
}


export default useBookRead