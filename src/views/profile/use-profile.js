import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PROFILE } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setData, response, setProfile, self }) {
  if (self == null) {
    setProfile({
      id: response.data.id ? 0 : 1,
      name: response.data.name,
      nickname: response.data.nickname,
      description: response.data.description,
      photo: response.data.photo
    })
  }
  setData({profile: response.data, loading: false})
}

async function useProfile({setData, setProfile, id}){
  if (BRANCH == 'dev' & PROFILE == 1) {
    setValues({ setProfile, response: CONTRACTS.profile.success})
    return
  }

  await api.get(ROUTES.view_profile, { params: {id} })
    .then((response) => {
      setValues({setData, setProfile, response, self: id})
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setProfile({loading: false})
    })
}

export default useProfile