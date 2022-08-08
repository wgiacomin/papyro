import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKTOREAD } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBookToRead, response }) {
  setBookToRead({ bookToRead: response.data, loading: false })
}


async function useBookToRead({ setBookToRead }) {
  if (BRANCH == 'dev'& BOOKTOREAD == 1) {
    setValues({ setBookToRead, response: CONTRACTS.book_toRead.success })
    return
  }

  await api.get(ROUTES.books_by_status + 'to_read')
    .then((response) => {
      setValues({setBookToRead, response})
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setBookToRead({ loading: false })
    })
}


export default useBookToRead