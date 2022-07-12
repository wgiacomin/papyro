import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PEOPLESUGGESTION } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setPeopleSuggestion, response }) {
  setPeopleSuggestion({ peopleSuggestion: response.data.people_suggestion, loading: false })
}


async function usePeopleSuggestion({ peopleSuggestion, setPeopleSuggestion }) {
  if (BRANCH == 'dev') {
    if (PEOPLESUGGESTION == 1) {
      setPeopleSuggestion({
        status: CONTRACTS.people_suggestion.error.status,
        msg: CONTRACTS.people_suggestion.error.data.detail
      })
    } else {
      setValues({ setPeopleSuggestion, response: CONTRACTS.people_suggestion.success })
    }
    return
  }

  await api.get(ROUTES.people_suggestion)
    .then((response) => {
      setValues(setPeopleSuggestion, response)
    }).catch((error) => {
      Alert.alert('Atenção', error.response.data.detail)
      setPeopleSuggestion({ loading: false })
    })
}


export default usePeopleSuggestion