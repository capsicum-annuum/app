import { HttpService } from 'app-services'
import { Environments } from 'app-config/constants'

export class UploadService {
  constructor() {
    this.environment = Environments.getCurrent()
    this.httpService = new HttpService('', this.environment.API_UPLOAD_URL)

    this.uploadImage = this.uploadImage.bind(this)
  }

  uploadImage(image = { uri: '' }) {
    const localUri = image.uri
    const filename = localUri.split('/').pop()

    const match = /\.(\w+)$/.exec(filename)
    const type = match ? `image/${match[1]}` : `image/jpg`

    const data = new FormData()
    data.append('image', { uri: localUri, name: filename, type })

    const headers = {
      authorization: this.environment.API_UPLOAD_TOKEN,
      'Content-Type': 'multipart/form-data',
    }

    return this.httpService
      .post('', undefined, data, headers)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log('error', error)
        return error
      })
  }
}
