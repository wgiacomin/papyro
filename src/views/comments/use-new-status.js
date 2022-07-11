import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH } from '@env'
import CONTRACTS from '../../routes/contracts'


async function useNewStatus({ id }) {

  if (BRANCH == 'dev') {
    return
  }

  await api.post(ROUTES.changeStatus).catch((error) => {
    Alert.alert('Atenção', error.response.data.detail)
  })
}


export default useNewStatus