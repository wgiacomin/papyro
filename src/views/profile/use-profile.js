import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import EXTERNALROUTES from '../../routes/external_routes'

async function useProfile({ setProfile, profile, setBooks }){

  await api.get(ROUTES.profile + 0).then((response) => {
    setBooks({
      state: true,
      reading: response.data.reading,
      reading_count: response.data.reading.length,
      read: response.data.read,
      read_count: response.data.read.length,
      to_read: response.data.to_read,
      to_read_count: response.data.to_read.length,
      groups: response.data.groups,
      groups_count: response.data.groups.length,
      image_reading: EXTERNALROUTES.cover + response.data.reading[0].capa + '.jpg',
      image_read: EXTERNALROUTES.cover + response.data.read[0].capa + '.jpg',
      image_to_read: EXTERNALROUTES.cover + response.data.to_read[0].capa + '.jpg',
    })
  }).catch((error) => {
    setBooks({
      state: true,
    })
    Alert.alert('Atenção', error.response.data.detail)
  })

  await api.get(ROUTES.edit_profile).then((response) => {
    setProfile({
      ...profile,
      id: response.data.id,
      email: response.data.email,
      birthday: response.data.birthday,
      description:  response.data.description,
    })
  }
  ).catch((error) => {
    Alert.alert('Atenção', error.response.data.detail)
  })
}


export default useProfile
