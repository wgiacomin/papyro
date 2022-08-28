import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, SEARCH } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setData, response, page, setBooks, books, setRefreshing, new_refresh }) {
  if (response.data.length > 0) {
    if (new_refresh) {
      setBooks(response.data)
    } else {
      setBooks([...books, ...response.data])
    }

    setData({ loading: false, page: page + 1 })
  } else {
    setData({ page, loading: false })
  }
  setRefreshing(false)
}


async function useSearch({ setData, page, books, setBooks, refreshing, setRefreshing, term, new_refresh }) {
  if (term == null) {
    return
  }

  if (BRANCH == 'dev' & SEARCH == 1) {
    if (page == 1 & books.length < 10) {
      setValues({ setData, response: CONTRACTS.search.success.page1, page, setBooks, books, setRefreshing })
    }
    if (page == 2 & books.length < 20 & !refreshing) {
      setRefreshing(true)
      setValues({ setData, response: CONTRACTS.search.success.page2, page, setBooks, books, setRefreshing })
    }
    return
  }

  await api.get(ROUTES.book_search, { params: { search: term, page } })
    .then((response) => {
      if (!refreshing) {
        setRefreshing(true)
        setValues({ setData, response, page, setBooks, books, setRefreshing, new_refresh })
      }
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setData({ loading: false })
    })
}


export default useSearch
