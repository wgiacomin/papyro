import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, LOGIN } from '@env'
import CONTRACTS from '../../routes/contracts'

  
async function usePersonalize({ setPersonalize }){
  await api.get(CONTRACTS.gender).then((response) => {
    setPersonalize({
      state: true,
      name: response.data.name,
      description: response.data.description
    })
  }).catch((error) => {
    Alert.alert('Atenção', error.response.data.detail)
  })
}

export default usePersonalize