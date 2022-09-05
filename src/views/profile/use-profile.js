import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PROFILE } from '@env'
import CONTRACTS from '../../routes/contracts'
import followButton from '../../../assets/buttons/followButton.png'
import followingButton from '../../../assets/buttons/followingButton.png'

function setValues({ setData, response, setProfile, self, setImage }) {
  if (self == null) {
    setProfile({
      id: response.data.id ? 0 : 1,
      name: response.data.name,
      nickname: response.data.nickname,
      description: response.data.description,
      photo: response.data.photo
    })
  } else {
    if (response.data['you_follow']) {
      setImage(followingButton)
    } else {
      setImage(followButton)
    }
  }
  setData({ profile: response.data, loading: false })
}

async function useProfile({ setData, setProfile, id, setImage }) {
  if (BRANCH == 'dev' & PROFILE == 1) {
    setValues({ setProfile, response: CONTRACTS.profile.success })
    return
  }

  await api.get(ROUTES.view_profile, { params: { id } })
    .then((response) => {
      setValues({ setData, setProfile, response, self: id, setImage })
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setData({ loading: false })
    })
}

export default useProfile