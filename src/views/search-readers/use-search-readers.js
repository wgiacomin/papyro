import ROUTES from '../../routes/routes'
import api from '../../routes/api'
import { Alert } from 'react-native'

import { BRANCH, SEARCH_READERS } from '@env'
import CONTRACTS from '../../routes/contracts'

function setValues({ setReaders, response }) {
	setReaders({ readers: response.data.get_reading_people, loading: false })
}

async function useSearchReaders({ id, setReaders }) {

	if (BRANCH == 'dev') {
		if (SEARCH_READERS == 1) {
			setReaders({
				status: CONTRACTS.get_reading_people.error.status,
				msg: CONTRACTS.get_reading_people.error.data.detail
			})
		} else {
			setValues({ setReaders, response: CONTRACTS.get_reading_people.success })
		}
		return
	}


	await api.get(ROUTES.get_book + id + '/pessoas')
		.then((response) => {
			setValues(setReaders, response)
		}).catch((error) => {
			Alert.alert('Atenção', error.response.data.detail)
			setReaders({ loading: false })
		})

}

export default useSearchReaders