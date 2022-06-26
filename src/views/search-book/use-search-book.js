import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, SEARCH } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setData, response, page, setBooks, books, setRefresing }) {
  if (response.data.result.books.length > 0){
    setBooks([...books, ...response.data.result.books])
    setData({ loading: false, page: page + 1 })
  }
  setRefresing(false)
}


async function useSearch({ setData, page, books, setBooks, refreshing, setRefresing }){
  if (BRANCH == 'dev') {
    if (SEARCH == 1) {
      setData({
        status: CONTRACTS.search.error.status,
        msg: CONTRACTS.search.error.data.detail
      })
    } else {
      if (page == 1 & books.length < 10){
        setValues({ setData, response: CONTRACTS.search.success.page1, page, setBooks, books, setRefresing})
      } 
      if (page == 2 & books.length < 20 & !refreshing) {
        setRefresing(true)
        setValues({ setData, response: CONTRACTS.search.success.page2, page, setBooks, books, setRefresing})
      }

    }
    return
  }

  await api.get(ROUTES.search + page)
    .then((response) => {
      if(!refreshing){
        setRefresing(true)
        setValues({ setData, response, page, setBooks, books, setRefresing})
      }
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setData({loading: false})
    })
}


export default useSearch
