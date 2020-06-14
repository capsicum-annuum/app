import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import { ApIcon, ApButton, ApTextInput, ApButtonTypes } from 'app-components'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'
import { strings } from 'app-locales'
import { ListLocationModal } from '../../components'

import Styles from './location-step.style'

const LocationType = {
  STATE: 'state',
  CITY: 'city',
}

export const LocationStep = () => {
  const [stateId, setStateId] = useState(null)
  const [stateData, setStateData] = useState([])
  const [cityData, setCityData] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [locationType, setLocationType] = useState(LocationType.STATE)

  const { location, currentLocationLoader, disabledButtons } = useSelector(
    (state) => state.RegisterReducer,
  )

  const dispatch = useDispatch()

  // const toggleModal = (type = locationType) => {
  //   setLocationType(type)
  //   setIsVisible(!isVisible)
  // }

  // const selectedItem = ({ name, id, latitude, longitude }) => {
  //   if (locationType === LocationType.STATE) {
  //     setState(name)
  //     setStateId(id)
  //   } else {
  //     setCity(name)
  //     setLocation({ latitude, longitude })
  //   }
  // }

  // const fetchStates = () => {
  //   LocationService.fetchStates().then((response) => setStateData(response))
  // }

  // const fetchCities = () => {
  //   LocationService.fetchCities(stateId).then((response) =>
  //     setCityData(response),
  //   )
  // }

  // useEffect(() => {
  //   fetchStates()
  // }, [])

  const activeLocation = () => {
    dispatch(RegisterActions.fetchCurrentLocationRequest())
  }

  const handleChangeNeighborhood = (value) => {
    dispatch(
      RegisterActions.updateUserData({
        location: { ...location, neighborhood: value },
      }),
    )
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={Styles.wrapper}>
      {/* <ListLocationModal
        isVisible={isVisible}
        closeCallback={toggleModal}
        data={locationType === LocationType.STATE ? stateData : cityData}
        selectedItem={locationType === LocationType.STATE ? state : city}
        selectedCallback={selectedItem}
      /> */}
      <ApButton
        size="small"
        onPress={activeLocation}
        buttonStyle={currentLocationLoader || Styles.activeLocationButton}
        containerStyle={Styles.topContainer}
        type={ApButtonTypes.PRIMARY}
        iconName="location"
        loading={currentLocationLoader}
        label={strings('register.enable_location')}
      />
      <View style={Styles.middleContainer}>
        <View style={Styles.line} />
        <Text style={Styles.orInformText}>{strings('register.or_inform')}</Text>
        <View style={Styles.line} />
      </View>
      <View style={Styles.bottomContainer}>
        <ApButton
          type={ApButtonTypes.PRIMARY}
          containerStyle={Styles.buttonMargin}
          disabled={disabledButtons}
          bold={location.state}
          style={Styles.button}
          label={location.state || strings('register.state')}
          onPress={() => {}}
        />
        <ApButton
          type={ApButtonTypes.PRIMARY}
          containerStyle={Styles.buttonMargin}
          bold={location.city}
          style={Styles.button}
          label={location.city || strings('register.city')}
          disabled={!location.state || disabledButtons}
          onPress={() => {}}
        />
        <ApTextInput
          type={ApButtonTypes.SECONDARY}
          optional
          onChangeText={handleChangeNeighborhood}
          value={location.neighborhood}
          returnKeyType="done"
          placeholder={strings('register.neighborhood')}
          disabled={!location.city}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
