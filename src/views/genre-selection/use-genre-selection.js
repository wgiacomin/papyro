import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, GENDERS } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setGenre, response }) {
  setGenre({ genre: response.data, loading: false })
}

async function useGenre({ setGenre }) {
  if (BRANCH == 'dev' & GENDERS == 1) {
    setValues({ setGenre, response: CONTRACTS.genders.success })
    return
  }

  await api.get(ROUTES.genre)
    .then((response) => {
      setValues({ setGenre, response })
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setGenre({ loading: false })
    })
}

export default useGenre