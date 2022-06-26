import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH, LOGIN } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setProfile, setRes, response }) {
  setRes({
    status: response.status,
    access_token: response.data.access_token
  })

  setProfile({
    id: response.data.user.id,
    name: response.data.user.name,
    nickname: response.data.user.nickname,
    description: response.data.user.description,
    photo: response.data.user.photo,
  })
}

async function useLogin({ data, setRes, setProfile, setLoading }) {
  if (BRANCH == 'dev') {
    if (LOGIN == 1) {
      setRes({
        status: CONTRACTS.login.error.status,
        msg: CONTRACTS.login.error.data.detail
      })
    } else {
      setValues({ setProfile, setRes, response: CONTRACTS.login.success })
    }
    return
  }

  if (data.email == '' || data.senha == '') {
    Alert.alert('Atenção!', 'Preencha todos os campos!')
    setLoading(false)
  } else {
    await api.post(ROUTES.login, {
      'email': data.email,
      'password': data.password,
    }).then((response) => {
      setValues({ setProfile, setRes, response })
    }
    ).catch((error) => {
      setLoading(false)
      setRes({
        status: error.response.status,
        msg: error.response.data.detail
      })
    })
  }
}

export default useLogin