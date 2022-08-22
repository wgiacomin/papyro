import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, NOTIFICATIONS } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setNotifications, response }) {
  setNotifications({ notifications: response.data, loading: false })
}


async function useNotification({ setNotifications }) {
  if (BRANCH == 'dev' & NOTIFICATIONS == 1) {
    setValues({ setNotifications, response: CONTRACTS.notifications.success })
    return
  }

  await api.get(ROUTES.notifications)
    .then((response) => {
      setValues({ setNotifications, response })
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setNotifications({ loading: false })
    })
}


export default useNotification
