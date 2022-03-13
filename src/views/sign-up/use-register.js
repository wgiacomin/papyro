import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'

async function useRegister({ data, setRes }){
  if (data.nome == '' || data.apelido == '' ||data.email == '' || data.senha == '' || data.data == ''){
    Alert.alert('Atenção!', 'Preencha todos os campos!')
  } else {
    const res = await api.post(ROUTES.signup, {
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