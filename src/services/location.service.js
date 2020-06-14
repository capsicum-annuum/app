import { HttpService } from 'app-services'
import { strings } from 'app-locales'
import * as Location from 'expo-location'

const GOOGLE_API_KEY = 'AIzaSyBo2JN9PUKnbHGM_SmX0ddNPXU9-tqbqZQ'
const BRAZILIAN_LOCALITIS_URL =
  'https://brazilian-localities-api.herokuapp.com/'

export class LocationService {
  constructor() {
    this.fetchGeocondig = this.fetchGeocondig.bind(this)
    this.fetchCurrentLocation = this.fetchCurrentLocation.bind(this)
  }

  async fetchCurrentLocation() {
    const { status } = await Location.requestPermissionsAsync()

    if (status !== 'granted') {
      return { errorMessage: strings('location_service.access_denied') }
    }

    const currentLocation = await Location.getCurrentPositionAsync({})

    const { latitude, longitude } = currentLocation.coords

    return this.fetchGeocondig(latitude, longitude).then(({ state, city }) => {
      return {
        location: {
          state,
          city,
          latitude,
          longitude,
          neighborhood: '',
        },
      }
    })
  }

  fetchGeocondig(latitude, longitude) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`

    const httpService = new HttpService('', url)

    return httpService
      .get()
      .then(({ results }) => {
        const { address_components: addressComponents } = results[0]

        const city = addressComponents[2].long_name
        const state = addressComponents[3].long_name

        return { city, state }
      })
      .catch((error) => {
        alert(JSON.stringify(error))

        return error
      })
  }

  fetchStates() {
    const url = `${BRAZILIAN_LOCALITIS_URL}states`
    const httpService = new HttpService('', url)

    return httpService.get().then((response) => {
      return response.states.docs
    })
  }

  fetchCities(stateId, page = 1, limit = 30) {
    const url = `${BRAZILIAN_LOCALITIS_URL}cities?page=${page}&limit=${limit}&id=${stateId}`

    const httpService = new HttpService('', url)

    return httpService.get().then((response) => {
      return response.states.docs
    })
  }
}
