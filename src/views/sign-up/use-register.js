import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH, SIGNUP } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setRes, response }) {
  setRes({
    status: response.status
  })
}

async function useRegister({ data, setRes }) {
  if (BRANCH == 'dev') {
    if (SIGNUP == 1) {
      setRes({
        status: CONTRACTS.signup.error.status,
        msg: CONTRACTS.signup.error.data.detail
      }) 
    } else {
      setValues({ setRes, response: CONTRACTS.signup.success })
    }
    return
  }

  if (data.name == '' || data.nickname == '' || data.email == '' || data.password == '') {
    Alert.alert('Atenção!', 'Preencha todos os campos!')
  } else {
    await api.post(ROUTES.signup, {
      'name': data.name,
      'nickname': data.nickname,
      'email': data.email,
      'password': data.password
    }).then((response) =>
      setRes({
        status: response.status
      })
    ).catch((error) => {
      setRes({
        status: error.response.status,
        msg: error.response.data.detail
      })
    })
  }
}

export default useRegister