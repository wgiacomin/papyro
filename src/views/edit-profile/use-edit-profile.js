import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PROFILE } from '@env'


async function useEditProfile({ setEditProfile, data, setProfile }) {
  if (BRANCH == 'dev' & PROFILE == 1) {
    return
  }

  if (data.name == '' | data.nickname == '') {
    Alert.alert('Atenção', 'Dados incompletos!')
    setEditProfile({ loading: false })
    return
  }

  const string_date = data.birthday.split(/\//)
  await api.put(ROUTES.edit_profile, {
    name: data.name,
    nickname: data.nickname,
    description: data.description,
    birthday: string_date[2] + '-' + string_date[1] + '-' + string_date[0]
  })
    .then((response) => {
      if (response.data == 1) {
        setProfile({ ...data })
      } else {
        Alert.alert('Atenção', 'Falha ao salvar informações')
      }
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setEditProfile({ loading: false })
    })
}

export default useEditProfile