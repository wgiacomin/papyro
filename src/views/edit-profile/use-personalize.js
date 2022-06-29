import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, GENDERS } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setGenders, response }) {
  setGenders({genders: response.data.genders, loading: false})
}

async function useGender({profile, setGenders }){
  if (BRANCH == 'dev') {
    if (GENDERS == 1) {
      setGenders({
        status: CONTRACTS.genders.error.status,
        msg: CONTRACTS.genders.error.data.detail
      })
    } else {
      setValues({ setGenders, response: CONTRACTS.genders.success})
    }
    return
  }

  await api.get(ROUTES.gender + profile.id)
    .then((response) => {
      setValues(setGenders, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setGenders({loading: false})
    })
}

export default useGender