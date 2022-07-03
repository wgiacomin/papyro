import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PROFILE } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setEditProfile, response }) {
  setEditProfile({profile: response.data.profile, loading: false})
}

async function useEditProfile({profile, setEditProfile }){
  if (BRANCH == 'dev') {
    if (PROFILE == 1) {
      setEditProfile({
        status: CONTRACTS.profile.error.status,
        msg: CONTRACTS.profile.error.data.detail
      })
    } else {
      setValues({ setEditProfile, response: CONTRACTS.profile.success})
    }
    return
  }

  await api.get(ROUTES.profile + profile.id)
    .then((response) => {
      setValues(setEditProfile, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setEditProfile({loading: false})
    })
}

export default useEditProfile