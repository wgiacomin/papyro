import ROUTES from '../routes/routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

async function refresh_func() {
  const refresh_token = await AsyncStorage.getItem('refresh_token')
  if (refresh_token) {
    await axios.get(`${ROUTES.baseURL}/${ROUTES.refresh}`,
      { headers: { 'Authorization': `Bearer ${refresh_token}` } })
      .then((response) => {
        if (response.status != 200) {
          AsyncStorage.removeItem('access_token')
        } else {
          AsyncStorage.setItem('access_token', response.data.access_token)
        }
      })
      .catch(() => AsyncStorage.removeItem('access_token'))
  } else {
    await AsyncStorage.removeItem('access_token')
  }
}

export default refresh_func