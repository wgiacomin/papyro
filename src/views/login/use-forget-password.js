import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH } from '@env'

async function useForgetPassword({ data }) {
  if (BRANCH == 'dev') {
    Alert.alert('Atenção!', 'Você receberá um e-mail contendo instruções para a troca de senha.')
    return
  }
  console.log(data)
  if (data.email == '') {
    Alert.alert('Atenção!', 'Preencha todos os campos!')
  } else {
    await api.post(ROUTES.forget_password, {
      'email': data.email,
    }).then(() => {
      Alert.alert('Atenção!', 'Você receberá um e-mail contendo instruções para a troca de senha.')
    })
  }
}

export default useForgetPassword