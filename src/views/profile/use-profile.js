import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import FIELDS from '../../routes/field_match'
import EXTERNALROUTES from '../../routes/external_routes'

async function useProfile({ setProfile, profile, setBooks }){

  await api.get(ROUTES.profile + 0).then((response) => {
    setBooks({
      state: true,
      reading: response.data[FIELDS.reading],
      reading_count: response.data[FIELDS.reading].length,
      read: response.data[FIELDS.read],
      read_count: response.data[FIELDS.read].length,
      to_read: response.data[FIELDS.to_read],
      to_read_count: response.data[FIELDS.to_read].length,
      groups: response.data[FIELDS.groups],
      groups_count: response.data[FIELDS.groups].length,
      image_reading: EXTERNALROUTES.cover + response.data[FIELDS.reading][0].capa + '.jpg',
      image_read: EXTERNALROUTES.cover + response.data[FIELDS.read][0].capa + '.jpg',
      image_to_read: EXTERNALROUTES.cover + response.data[FIELDS.to_read][0].capa + '.jpg',
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
      email: response.data[FIELDS.email],
      birthday: response.data[FIELDS.birthday],
      description:  response.data[FIELDS.description],
    })
  }
  ).catch((error) => {
    Alert.alert('Atenção', error.response.data.detail)
  })
}


export default useProfile
