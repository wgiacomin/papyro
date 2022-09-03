import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, FOLLOWING } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setFollowing, response, page, setRefreshing, setData, following, new_refresh }) {
  if (response.data.length > 0) {
    if (new_refresh) {
      setFollowing(response.data)
    } else {
      setFollowing([...following, ...response.data])
    }
    setData({ loading: false, page: page + 1 })
  } else {
    setData({ page, loading: false })
  }
  setRefreshing(false)
}

async function useFollowing({ setFollowing, page, refreshing, setRefreshing, setData, following, new_refresh, route_type, id }) {

  if (BRANCH == 'dev' & FOLLOWING == 1) {
    setValues({ setFollowing, response: CONTRACTS.get_following.success })
    return
  }

  await api.get(ROUTES.get_following, { params: { page, friend_type: route_type, user_id: id } })
    .then((response) => {
      if (!refreshing) {
        setRefreshing(true)
        setValues({ setFollowing, response, page, setRefreshing, setData, following, new_refresh })
      }
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setData({ loading: false })
    })

}

export default useFollowing