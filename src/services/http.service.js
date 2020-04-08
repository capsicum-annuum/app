import * as axios from 'axios'
import { Endpoints } from '@ca-config/pf/constants'
import { StringResolver } from 'app-utils'

export class HttpService {
  constructor(apiGateway = '') {
    this.stringResolver = new StringResolver()

    this.apiGateway = apiGateway
    this.httpClient = axios.create({
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.request = this.request.bind(this)
    this.resolveUrl = this.resolveUrl.bind(this)
    this.unwrap = this.unwrap.bind(this)
    this.post = this.post.bind(this)
    this.get = this.get.bind(this)
    this.delete = this.delete.bind(this)
    this.put = this.put.bind(this)
    this.patch = this.patch.bind(this)
  }

  request(method, url = '', params = null, data = null, headers = {}) {
    const config = {
      method,
      url: this.resolveUrl(url, params),
      data,
      headers,
    }

    return this.httpClient.request(config).then(this.unwrap)
  }

  resolveUrl(url, params) {
    const apiUrl = Endpoints.getApiUrl()
    const resolvedUrl = this.stringResolver.resolve(url, params)
    return `${apiUrl}${this.apiGateway}${resolvedUrl}`
  }

  unwrap(response) {
    return response.data
  }

  delete(url, params, data, headers) {
    return this.request('DELETE', url, params, data, headers)
  }

  get(url, params, data, headers) {
    return this.request('GET', url, params, data, headers)
  }

  patch(url, params, data, headers) {
    return this.request('PATCH', url, params, data, headers)
  }

  post(url, params, data, headers) {
    return this.request('POST', url, params, data, headers)
  }

  put(url, params, data, headers) {
    return this.request('PUT', url, params, data, headers)
  }
}