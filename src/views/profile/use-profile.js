import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PROFILE } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setProfile, response }) {
  setProfile({profile: response.data, loading: false})
}

async function useProfile({profile, setProfile }){
  if (BRANCH == 'dev') {
    if (PROFILE == 1) {
      setProfile({
        status: CONTRACTS.profile.error.status,
        msg: CONTRACTS.profile.error.data.detail
      })
    } else {
      setValues({ setProfile, response: CONTRACTS.profile.success})
    }
    return
  }

  await api.get(ROUTES.profile + profile.id)
    .then((response) => {
      setValues(setProfile, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setProfile({loading: false})
    })
}

export default useProfile