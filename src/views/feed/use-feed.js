import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, FEED } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setFeed, response}){
  setFeed({ feed: response.data.feed, loading: false })
}

async function useFeed({profile, setFeed}) {
  if(BRANCH == 'dev'){
    if(FEED == 1){
      setFeed({
        status: CONTRACTS.feed.status,
        msg: CONTRACTS.feed.error.data.detail
      })
    }else{
      setValues({setFeed, response: CONTRACTS.feed.success})
    }
    return
  }

  await api.get(ROUTES.feed + profile.id)
    .then((response) => {
      setValues(setFeed, response)
    }).catch((error) => {
      setFeed({loading: false})
      Alert.alert('Atenção', error.response.detail)
    })

}

export default useFeed