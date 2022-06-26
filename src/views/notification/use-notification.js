import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, NOTIFICATIONS } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setNotifications, response }) {
  setNotifications({notifications: response.data.notifications, loading: false})
}


async function useNotification({profile, setNotifications }){
  if (BRANCH == 'dev') {
    if (NOTIFICATIONS == 1) {
      setNotifications({
        status: CONTRACTS.notifications.error.status,
        msg: CONTRACTS.notifications.error.data.detail
      })
    } else {
      setValues({ setNotifications, response: CONTRACTS.notifications.success})
    }
    return
  }

  await api.get(ROUTES.notifications + profile.id)
    .then((response) => {
      setValues(setNotifications, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setNotifications({loading: false})
    })
}


export default useNotification
