import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, SEARCH_READERS_LIST } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setCompany, response }) {
  setCompany({ company: response.data.get_reading_people_list, loading: false })
}

async function useCompany({ id, id_status, setCompany }) {

  if (BRANCH == 'dev') {
    if (SEARCH_READERS_LIST == 1) {
      setCompany({
        status: CONTRACTS.get_reading_people_list.error.status,
        msg: CONTRACTS.get_reading_people_list.error.data.detail
      })
    } else {
      setValues({ setCompany, response: CONTRACTS.get_reading_people_list.success })
    }
    return
  }


  await api.get(ROUTES.get_book + id + '/pessoas/' + id_status)
    .then((response) => {
      setValues(setCompany, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setCompany({ loading: false })
    })

}

export default useCompany