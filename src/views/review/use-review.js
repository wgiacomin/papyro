import { Alert } from 'react-native'
import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { BRANCH, REVIEW } from '@env'

async function useReview({ id, rate, text, navigation }) {
  if (BRANCH == 'dev' & REVIEW == 1) {
    navigation.navigate('ViewBook')
    return
  }

  if (rate == null) {
    Alert.alert('Atenção!', 'Você não selecionou a nota!')
  } else {
    await api.post(ROUTES.rate, {
      id_book: id,
      text,
      rate
    }).then((response) => {
      navigation.navigate('ViewBook')
    }
    ).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
    })
  }
}

export default useReview