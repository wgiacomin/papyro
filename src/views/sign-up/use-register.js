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

  if (data.nome == '' || data.apelido == '' || data.email == '' || data.senha == '' || data.data == '') {
    Alert.alert('Atenção!', 'Preencha todos os campos!')
  } else {
    await api.post(ROUTES.signup, {
      'nome': data.nome,
      'apelido': data.apelido,
      'email': data.email,
      'senha': data.senha,
      'data_nascimento': data.data_post
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