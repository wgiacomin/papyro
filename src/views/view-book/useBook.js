import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, VIEWBOOK } from '@env'
import CONTRACTS from '../../routes/contracts'

import external_api from '../../routes/external_api'
import EXTERNALROUTES from '../../routes/external_routes'
import FIELDS from '../../routes/field_match'
import EXTERNAL_FIELDS from '../../routes/external_fields'


function setValues({ setBook, response }) {
  setBook({ viewbook: response.data.viewbook, loading: false })
}

async function useGetBook({ setBook, id }) {

  if (BRANCH === 'dev') {
    // setValues({ setBook, response: CONTRACTS.livro.success })
    // setBook({
    //   loading: false,
    //   loading_book: false,
    //   error: true,
    //   book_info: {
    //     status: CONTRACTS.livro.error.status,
    //     msg: CONTRACTS.livro.error.data.detail
    //   }
    // })
    setBook({
      loading: false,
      loading_book: false,
      error: true,
    })
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