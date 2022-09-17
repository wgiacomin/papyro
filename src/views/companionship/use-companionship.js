import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, SEARCH_READERS_LIST } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setData, response, page, setCompanionship, readers, setRefreshing, new_refresh }) {
  if (response.data.readers.length > 0) {
    if (new_refresh) {
      setCompanionship(response.data.readers)
    } else {
      setCompanionship([...readers, ...response.data.readers])
    }

    setData({ loading: false, page: page + 1 })
  } else {
    setData({ page, loading: false })
  }
  setRefreshing(false)
}

async function useCompanionship({ setData, page, setRefreshing, refreshing, id, id_status, setCompanionship, readers, new_refresh }) {
  if (BRANCH == 'dev' & SEARCH_READERS_LIST == 1) {
    setValues({ setCompanionship, response: CONTRACTS.get_reading_people_list.success })
    return
  }


  await api.get(ROUTES.user_book + `${id}/${id_status}`, { params: { page } })
    .then((response) => {
      if (!refreshing) {
        setRefreshing(true)
        setValues({ setData, response, page, setCompanionship, readers, setRefreshing, new_refresh })
      }
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setData({ loading: false })
    })

}

export default useCompanionship