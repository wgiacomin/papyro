import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, BOOKREAD } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setBook, response, book, setData, new_refresh, setRefreshing, page }) {
  if (response.data.length > 0) {
    if (new_refresh) {
      setBook(response.data)
    } else {
      setBook([...book, ...response.data])
    }
    setData({ loading: false, page: page + 1 })
  } else {
    setData({ page, loading: false })
  }
  setRefreshing(false)
}


async function useBook({ setBook, page, refreshing, setRefreshing, setData, book, new_refresh, route_type }) {
  if (BRANCH == 'dev' & BOOKREAD == 1) {
    setValues({ setBook, response: CONTRACTS.book_read.success })
    return
  }

  await api.get(ROUTES.books_by_status + route_type, { params: { page } })
    .then((response) => {
      if (!refreshing) {
        setRefreshing(true)
        setValues({ setBook, response, book, setData, new_refresh, setRefreshing, page })
      }
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setData({ loading: false })
    })
}


export default useBook