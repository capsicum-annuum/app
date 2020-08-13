import { HttpService } from 'app-services'
import { strings } from 'app-locales'
import * as Location from 'expo-location'

const GOOGLE_API_KEY = 'AIzaSyBo2JN9PUKnbHGM_SmX0ddNPXU9-tqbqZQ'

export class LocationService {
  constructor() {
    this.httpService = new HttpService()

    this.fetchStates = this.fetchStates.bind(this)
    this.fetchCities = this.fetchCities.bind(this)
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

    return this.fetchGeocondig(latitude, longitude).then(
      ({ stateName, cityName, federatedUnityAcronym }) => {
        return {
          location: {
            stateName,
            cityName,
            latitude,
            longitude,
            district: '',
            federatedUnityAcronym,
          },
        }
      },
    )
  }

  fetchGeocondig(latitude, longitude) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`

    const httpService = new HttpService('', url)

    return httpService
      .get()
      .then(({ results }) => {
        const { address_components: addressComponents } = results[0]

        const cityName = addressComponents[3].long_name
        const stateName = addressComponents[4].long_name
        const federatedUnityAcronym = addressComponents[4].short_name

        return { cityName, stateName, federatedUnityAcronym }
      })
      .catch((error) => {
        alert(JSON.stringify(error))

        throw error
      })
  }

  fetchStates() {
    return this.httpService
      .get('/locality/federated-unity')
      .then(({ federatedUnities }) => {
        return federatedUnities
      })
      .catch((error) => {
        console.log('fetchStates error', error)

        throw error
      })
  }

  fetchCities(id) {
    return this.httpService
      .get(`/locality/city?id=${id}`)
      .then(({ cities }) => {
        return cities
      })
      .catch((error) => {
        console.log('fetchStates error', error)

        throw error
      })
  }
}
