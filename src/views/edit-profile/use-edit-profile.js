import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'


async function useEditProfile({ setProfile, props, profile }){
  const response = await api.get(ROUTES.edit_profile)
    .catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
    })

  await api.put(ROUTES.update_profile, {...response.data, ...props})
    .then(() => setProfile({...profile, ...props}))
    .catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
    })
}
  
  
export default useEditProfile