import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKREADING } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBookReading, response }) {
  setBookReading({ bookReading: response.data.book_reading, loading: false })
}


async function useBookReading({ useBookReading, setBookReading }) {
  if (BRANCH == 'dev') {
    if (BOOKREADING == 1) {
      setBookReading({
        status: CONTRACTS.book_reading.error.status,
        msg: CONTRACTS.book_reading.error.data.detail
      })
    } else {
      setValues({ setBookReading, response: CONTRACTS.book_reading.success })
    }
    return
  }

  await api.get(ROUTES.book_reading)
    .then((response) => {
      setValues(setBookReading, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setBookReading({ loading: false })
    })
}


export default useBookReading