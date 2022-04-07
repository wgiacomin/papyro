import axios from 'axios'

const external_api = axios.create({
  baseURL: 'https://openlibrary.org',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

})

export default external_api
