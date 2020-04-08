import { call } from 'redux-saga/effects'
import { LocalStorageService } from 'app-services'

const localStorage = new LocalStorageService()

/**
 * Makes a request to the endpoint with the post login token
 *
 * @param {Function} req => one of the following functions from HttpService: get, post, put, patch, delete
 * @param {string} url => endpoint url including path variables,
 * @param {string} params => url params
 * @param {*} data => the request object data
 * @param {*} headers => custom header
 * @param {*} onSuccess => function or generator function
 * @param {*} onError => function or generator function
 */
export function* makeRequest({
  req,
  url,
  params,
  data,
  headers = {},
  onSuccess,
  onError,
  isAuthenticated,
}) {
  if (isAuthenticated) {
    const token = call(localStorage.getString, Authorization.ACCESS_TOKEN)

    if (token) {
      headers.Authorization = token
    }
  }

  try {
    const response = yield call(req, url, params || data, headers)
    yield onSuccess(response)
  } catch (error) {
    yield onError(error)
  }
}
