import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH, PROFILE } from '@env'
import CONTRACTS from '../../routes/contracts'
import followButton from '../../../assets/buttons/followButton.png'
import followingButton from '../../../assets/buttons/followingButton.png'
import { Alert } from 'react-native'

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

async function useProfile({ setData, setProfile, id, setImage, times }) {
  if (times == null) {
    times = 0
  }
  if (BRANCH == 'dev' & PROFILE == 1) {
    setValues({ setProfile, response: CONTRACTS.profile.success })
    return
  }
  await api.get(ROUTES.view_profile, { params: { id } })
    .then((response) => {
      setValues({ setData, setProfile, response, self: id, setImage })
    }).catch((error) => {
      if (times < 1) {
        useProfile({ setData, setProfile, id, setImage, times: times + 1 })
      } else {
        Alert.alert('Atenção!', error.msg)
      }
    })
}

export default useProfile