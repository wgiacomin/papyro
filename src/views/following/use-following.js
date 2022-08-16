import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, FOLLOWING } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setFollowing, response }) {
  setFollowing({ following: response.data.get_following, loading: false })
}

async function useFollowing({ setFollowing, page, refreshing, setRefreshing, setData, following, new_refresh }) {

  if (BRANCH == 'dev' & FOLLOWING == 1) {
    setValues({ setFollowing, response: CONTRACTS.get_following.success })
    return
  }
  return
  // await api.get(ROUTES.get_following)
  //   .then((response) => {
  //     setValues(setFollowing, response)
  //   }).catch((error) => {
  //     Alert.alert('Atenção', error.response.data.detail)
  //     setFollowing({ loading: false })
  //   })

}

export default useFollowing