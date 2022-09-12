import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH } from '@env'

async function useForgetPassword({ data, setRes, setLoading, navigation }) {
  if (BRANCH == 'dev') {
    Alert.alert('Atenção!', 'Você receberá um e-mail contendo instruções para a troca de senha.')
    return
  }

  if (data.email == '') {
    Alert.alert('Atenção!', 'Preencha todos os campos!')
    setLoading(false)
  } else {
    await api.post(ROUTES.forget_password, {
      'email': data.email,
    }).then(() => {
      Alert.alert('Atenção!', 'Você receberá um e-mail contendo instruções para a troca de senha.')
      setLoading(false)
      navigation.navigate('ResetPassword', { email: data.email })
    }).catch((error) => {
      setLoading(false)
      navigation.navigate('ForgetPassword')
      setRes({
        status: error.response.status,
        msg: error.response.data.detail,
      })
    })
  }
}

export default useForgetPassword