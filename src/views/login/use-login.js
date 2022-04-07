import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'

async function useLogin({ data, setRes, setProfile, setLoading }){
  if (data.email == '' || data.senha == ''){
    Alert.alert('Atenção!', 'Preencha todos os campos!')
    setLoading(false)
  } else {
    await api.post(ROUTES.login, {
      'email': data.email,
      'senha': data.senha,
    }).then((response) => {
      setRes({
        status: response.status,
        access_token: response.data.access_token
      })

      setProfile({
        name: response.data.usuario.nome, 
        nickname: response.data.usuario.apelido,
        description: response.data.usuario.descricao,
      })
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