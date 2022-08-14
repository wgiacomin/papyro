import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PROFILE } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setEditProfile, response }) {
  setEditProfile({profile: response.data, loading: false})
}

async function useEditProfile({profile, setEditProfile }){
  if (BRANCH == 'dev' & PROFILE == 1) {
    setValues({ setEditProfile, response: CONTRACTS.profile.success})
    return
  }
  return setEditProfile({profile: profile})

  // await api.get(ROUTES.profile)
  //   .then((response) => {
  //     setValues({setEditProfile, response})
  //   }).catch((error) => {
  //     Alert.alert('Atenção', error.response.data.detail)
  //     setEditProfile({loading: false})
  //   })
}

export default useEditProfile