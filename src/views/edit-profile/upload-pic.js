import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

async function uploadPic({ remoteURL, profile, setProfile }) {
  await api.put(ROUTES.add_image + '?link=' + remoteURL)
    .then(() => {
      setProfile({
        ...profile,
        photo: remoteURL
      })
    })
    .catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
    })
}


export default uploadPic