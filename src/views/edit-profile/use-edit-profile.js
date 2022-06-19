import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'


async function useEditProfile({ setProfile, props, profile }){
  await api.put(ROUTES.update_profile, props)
    .then(() => setProfile({...profile, ...props}))
    .catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
    })  
}
  
  
export default useEditProfile