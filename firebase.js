import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAwn20BbFhWG8syoCSs6ct3WaEXJxu2mQk',
  authDomain: 'ethereal-shape-340121.firebaseapp.com',
  projectId: 'ethereal-shape-340121',
  storageBucket: 'ethereal-shape-340121.appspot.com',
  messagingSenderId: '43456760927',
  appId: '1:43456760927:web:026f4a65ed7d14dc6b1fea',
}

const app = initializeApp(firebaseConfig)

export default getStorage(app)
