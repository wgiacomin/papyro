import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, PEOPLESUGGESTION } from '@env'
import CONTRACTS from '../../routes/contracts'


function setValues({ setPeopleSuggestion, response, page, setRefreshing, setData }) {
  if (response.data.data.length > 0) {
    setPeopleSuggestion(response.data.data)
    setData({ loading: false, page: page + 1 })
  } else {
    setData({ page, loading: false })
  }
  setRefreshing(false)
}


async function usePeopleSuggestion({ setPeopleSuggestion, page, setRefreshing, setData }) {
  if (BRANCH == 'dev' & PEOPLESUGGESTION == 1) {
    setValues({ setPeopleSuggestion, response: CONTRACTS.people_suggestion.success })
    return
  }

  await api.get(ROUTES.people_suggestion, { params: { page } })
    .then(async (response) => {
      setValues({ setPeopleSuggestion, response, page, setRefreshing, setData })
    }).catch((error) => {
      setData({ loading: false })
    })
}


export default usePeopleSuggestion