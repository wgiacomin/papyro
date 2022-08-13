import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PROFILE } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setProfile, response }) {
  setProfile({profile: response.data, loading: false})
}

async function useProfile({setProfile, id}){
  if (BRANCH == 'dev' & PROFILE == 1) {
    setValues({ setProfile, response: CONTRACTS.profile.success})
    return
  }

  await api.get(ROUTES.view_profile, { params: {id} })
    .then((response) => {
      setValues({setProfile, response})
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setProfile({loading: false})
    })
}

export default useProfile