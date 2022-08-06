import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKREADING } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBookReading, response }) {
  setBookReading({ bookReading: response.data, loading: false })
}


async function useBookReading({ setBookReading }) {
  if (BRANCH == 'dev'& BOOKREADING == 1) {
    setValues({ setBookReading, response: CONTRACTS.book_reading.success })
    return
  }

  await api.get(ROUTES.books_by_status + 'reading')
    .then((response) => {
      setValues({setBookReading, response})
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setBookReading({ loading: false })
    })
}


export default useBookReading