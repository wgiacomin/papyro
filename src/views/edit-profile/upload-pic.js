import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { useAuthDispatch } from '../../context/auth-context'


async function uploadPic({ fileURL, profile }) {
  const { setProfile } = useAuthDispatch()

  await api.put(ROUTES.add_image, { link: fileURL })
    .then(() => {
      setProfile({
        ...profile,
        photo: fileURL
      })
    })
    .catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
    })
}


export default uploadPic