import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCN--VHaH6R-l0BNJTLmhu_wkBY2ZodbFA',
  authDomain: 'papyro-f8f5b.firebaseapp.com',
  projectId: 'papyro-f8f5b',
  storageBucket: 'papyro-f8f5b.appspot.com',
  appId: '1:620810035162:android:2e2d0da557fa9819dfaae3',
}

let app = initializeApp(firebaseConfig)
let storage = getStorage(app)

export default storage