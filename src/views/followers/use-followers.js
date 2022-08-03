import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, FOLLOWERS } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setFollowers, response }) {
  setFollowers({ followers: response.data.get_followers, loading: false })
}

async function useFollowers({ useFollowers, setFollowers }) {

  if (BRANCH == 'dev') {
    if (FOLLOWERS == 1) {
      setFollowers({
        status: CONTRACTS.get_followers.error.status,
        msg: CONTRACTS.get_followers.error.data.detail
      })
    } else {
      setValues({ setFollowers, response: CONTRACTS.get_followers.success })
    }
    return
  }


  await api.get(ROUTES.get_followers)
    .then((response) => {
      setValues(setFollowers, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setFollowers({ loading: false })
    })

}

export default useFollowers