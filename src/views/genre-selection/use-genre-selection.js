import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, GENDERS } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setGenders, response }) {
  setGenders({genders: response.data, loading: false})
}

async function useGender({setGenders }){
  if (BRANCH == 'dev' & GENDERS == 1) {
    setValues({ setGenders, response: CONTRACTS.genders.success})
    return
  }

  await api.get(ROUTES.gender)
    .then((response) => {
      setValues({setGenders, response})
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setGenders({loading: false})
    })
}

export default useGender