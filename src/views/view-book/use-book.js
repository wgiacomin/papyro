import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH, GET_BOOK } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setBook, response }) {
  setBook({ book: response.data, loading: false })
}

async function useGetBook({ id, setBook, navigation }) {
  if (BRANCH == 'dev' & GET_BOOK == 1) {
    setValues({ setBook, response: CONTRACTS.get_book.success })
    return
  }

  await api.get(ROUTES.get_book + id)
    .then((response) => {
      setValues({ setBook, response })
    }).catch((error) => {
      useGetBook({ id, setBook, navigation })
    })

}

export default useGetBook