import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH } from '@env'

async function useReview({ data, setLoading, navigation }) {
  setLoading(true)
  if (BRANCH == 'dev') {
    navigation.navigate('ViewBook')
    return
  }
  
  if (!(data >= 1)) {
    setLoading(false)
    Alert.alert('Atenção!', 'Você não selecionou a nota!')
  } else {
    await api.post(ROUTES.review, {
      'email': data.email,
      'password': data.password,
    }).then((response) => {
      navigation.navigate('ViewBook')
    }
    ).catch((error) => {
      setLoading(false)
    })
  }
}

export default useReview