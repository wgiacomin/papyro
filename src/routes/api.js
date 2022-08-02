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
    if(access_token){
      config.headers.Authorization = `Bearer ${access_token}`
    }
    return(config)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default api
