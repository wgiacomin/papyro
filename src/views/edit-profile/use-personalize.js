import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, GENDER } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setGender, response }) {
  setGender({gender: response.data.gender, loading: false})
}

async function useGender({profile, setGender }){
  if (BRANCH == 'dev') {
    if (GENDER == 1) {
      setGender({
        status: CONTRACTS.gender.error.status,
        msg: CONTRACTS.gender.error.data.detail
      })
    } else {
      setValues({ setGender, response: CONTRACTS.gender.success})
    }
    return
  }

  await api.get(ROUTES.gender + profile.id)
    .then((response) => {
      setValues(setGender, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setGender({loading: false})
    })
}

export default useGender