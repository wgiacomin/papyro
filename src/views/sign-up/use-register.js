import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'

async function useRegister({ data, navigation }){
  if (data.nome == '' || data.apelido == '' ||data.email == '' || data.senha == '' || data.data == ''){
    Alert.alert('Atenção!', 'Preencha todos os campos!')
  } else {
    await api.post(ROUTES.signup, {
      'nome': data.nome,
      'apelido': data.apelido,
      'email': data.email,
      'senha': data.senha,
      'data_nascimento': data.data_post
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  } 

}

export default useRegister