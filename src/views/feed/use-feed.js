import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, FEED } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setFeed, response}){
  setFeed({ feed: response.data, loading: false })
}

async function useFeed({setFeed}) {
  if(BRANCH == 'dev' & FEED == 1){
    setValues({setFeed, response: CONTRACTS.feed.success})
    return
  }

  await api.get(ROUTES.feed)
    .then((response) => {
      setValues({setFeed, response})
    }).catch((error) => {
      setFeed({loading: false})
      Alert.alert('Atenção', error.response.detail)
    })

}

export default useFeed