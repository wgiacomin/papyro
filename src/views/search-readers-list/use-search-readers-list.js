import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, SEARCH_READERS_LIST } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setReaders, response }) {
    setReaders({ readers: response.data.get_reading_people_list, loading: false })
}

async function useSearchReadersList({ id, id_status, setReaders }) {

    if (BRANCH == 'dev') {
        if (SEARCH_READERS_LIST == 1) {
            setReaders({
                status: CONTRACTS.get_reading_people_list.error.status,
                msg: CONTRACTS.get_reading_people_list.error.data.detail
            })
        } else {
            setValues({ setReaders, response: CONTRACTS.get_reading_people_list.success })
        }
        return
    }


    await api.get(ROUTES.get_book + id + '/pessoas/' + id_status)
        .then((response) => {
            setValues(setReaders, response)
        }).catch((error) => {
            Alert.alert('Atenção', error.response.data.detail)
            setNotifications({ loading: false })
        })

}

export default useSearchReadersList