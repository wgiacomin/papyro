import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, GET_BOOK } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setBook, response }) {
  setBook({ book: response.data.book, loading: false })
}

async function useGetBook({ id, setBook }) {

  if (BRANCH == 'dev') {
    if (GET_BOOK == 1) {
      setBook({
        status: CONTRACTS.get_book.error.status,
        msg: CONTRACTS.get_book.error.data.detail
      })
    } else {
      setValues({ setBook, response: CONTRACTS.get_book.success })
    }
    return
  }


  let key = ''
  await api.get(ROUTES.get_book + id).then((response) => {
    setBook({
      loading: false,
      error: false,
      book_info: response.data
    })
    key = response.data
  }).catch((error) => {
    setBook({
      loading: false,
      loading_book: false,
      error: true,
    })
    Alert.alert('Atenção', error.response.data.detail)
  })

}

export default useGetBook