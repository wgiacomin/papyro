import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH, SIGNUP } from '@env'


function setValues({ setProfile, setRes, response }) {
  setRes({
    status: response.status,
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token
  })

  setProfile({
    id: response.data.user.id,
    name: response.data.user.name,
    nickname: response.data.user.nickname,
    description: response.data.user.description,
    photo: response.data.user.photo
  })
}

async function useRegister({ data, setRes, setProfile }) {

  if (BRANCH == 'dev' & SIGNUP == 1) {
    return
  }

  if (data.name == '' || data.nickname == '' || data.email == '' || data.password == '' || data.confirmation_password == '') {
    Alert.alert('Atenção!', 'Preencha todos os campos!')
  } else {
    await api.post(ROUTES.signup, {
      'name': data.name,
      'nickname': data.nickname,
      'email': data.email,
      'password': data.password,
      'confirmation_password': data.confirmation_password,
    }).then((response) =>
      setValues({ setProfile, setRes, response })
    ).catch((error) => {
      setRes({
        status: error.response.status,
        msg: error.response.data.detail
      })
    })
  }
}

export default useRegister