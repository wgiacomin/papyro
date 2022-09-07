import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'
import { BRANCH, FEED } from '@env'
import CONTRACTS from '../../routes/contracts'
import refresh_func from '../../routes/refresh'

function setValues({ setFeed, response, page, setRefreshing, setData, feed, new_refresh }) {
  if (response.data.length > 0) {
    if (new_refresh) {
      setFeed(response.data)
    } else {
      setFeed([...feed, ...response.data])
    }

    setData({ loading: false, page: page + 1 })
  } else {
    setData({ page, loading: false })
  }
  setRefreshing(false)
}

async function useFeed({ setFeed, setData, page, refreshing, setRefreshing, feed, new_refresh }) {
  if (page == null) {
    return
  }



  if (BRANCH == 'dev' & FEED == 1) {
    setValues({ setFeed, response: CONTRACTS.feed.success })
    return
  }

  await api.get(ROUTES.feed, { params: { page } })
    .then((response) => {
      if (!refreshing) {
        setRefreshing(true)
        setValues({ setFeed, response, page, setRefreshing, setData, feed, new_refresh })
      }
    }).catch((error) => {
      useFeed({ setFeed, setData, page, refreshing, setRefreshing, feed, new_refresh })
    })

}

export default useFeed