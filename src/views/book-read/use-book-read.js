import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKREAD } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBookRead, response }) {
  setBookRead({ bookRead: response.data, loading: false })
}


async function useBookRead({ setBookRead }) {
  if (BRANCH == 'dev'& BOOKREAD == 1) {
    setValues({ setBookRead, response: CONTRACTS.book_read.success })
    return
  }

  await api.get(ROUTES.books_by_status + 'read')
    .then((response) => {
      setValues({setBookRead, response})
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setBookRead({ loading: false })
    })
}


export default useBookRead