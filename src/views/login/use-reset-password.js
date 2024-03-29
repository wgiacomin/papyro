import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH } from '@env'

async function useResetPassword({ data, setRes}) {
  if (BRANCH == 'dev') {
    Alert.alert('Atenção!', 'Senha alterada com sucesso.')
    return
  }

  if (data.email == '' | data.code_otp == '' | data.new_password == '' | data.confirmation_password == '') {
    Alert.alert('Atenção!', 'Preencha todos os campos!')
  } else {
    await api.post(ROUTES.reset_password, {
      'email': data.email, 
      'reset_password_code': data.code_otp, 
      'new_password': data.password, 
      'confirmation_password': data.confirmation_password,
    }).then(() => {
      Alert.alert('Atenção!', 'Senha alterada com sucesso.')
    }).catch((error) => {
      setRes({
        status: error.response.status,
        msg: error.response.data.detail,
      })
    })
  }
}

export default useResetPassword