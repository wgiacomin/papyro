import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ROUTES from './routes'

const api = axios.create({
  baseURL: ROUTES.baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

})

api.interceptors.request.use(
  async (config) => {
    const access_token = await AsyncStorage.getItem('access_token')
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`
    }
    return (config)
  },
  (err) => {
    return Promise.reject(err)
  }
)

api.interceptors.response.use(
  async (response) => {
    return (response)
  },
  async (err) => {
    if (err.response.status == 401) {
      const refresh_token = await AsyncStorage.getItem('refresh_token')
      if (refresh_token) {
        await axios.get(`${ROUTES.baseURL}/${ROUTES.refresh}`,
          { headers: { 'Authorization': `Bearer ${refresh_token}` } })
          .then(async (response) => {
            if (response.status != 200) {
              await AsyncStorage.removeItem('access_token')
              await AsyncStorage.removeItem('refresh_token')
            } else {
              await AsyncStorage.setItem('access_token', (response.data.access_token))
            }
          })
          .catch(async () => {
            await AsyncStorage.removeItem('access_token')
            await AsyncStorage.removeItem('refresh_token')
          })
      } else {
        await AsyncStorage.removeItem('access_token')
        await AsyncStorage.removeItem('refresh_token')
      }
    }
    return Promise.reject(err)
  }
)

export default api
