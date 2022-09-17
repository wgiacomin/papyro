import { uuidv4 } from '@firebase/util'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../../../firebase'

const manageFileUpload = async (
  fileBlob,
  { onStart, onProgress, onComplete, onFail }
) => {
  const imgName = 'img-' + new Date().getTime()

  const storageRef = ref(storage, uuidv4() + '.jpg')

  console.log('uploading file', imgName)

  // Create file metadata including the content type
  const metadata = {
    contentType: 'image/jpeg',
  }

  // Trigger file upload start event
  onStart && onStart()
  const uploadTask = uploadBytesResumable(storageRef, fileBlob)
  uploadTask.on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      onProgress && onProgress(Math.fround(progress).toFixed(2))
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error)
      onFail && onFail(error)
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        onComplete && onComplete(downloadURL)
      })
    }
  )

}

export default manageFileUpload
