import React, { useRef } from 'react'
import { View, ScrollView } from 'react-native'
import {
  ApButton,
  ApButtonTypes,
  ApTextInput,
  ApTextInputTypes,
} from 'app-components'
import { strings } from 'app-locales'
import { useSelector, useDispatch } from 'react-redux'

import Styles from './organization-location-step.style'

export const OrganizationLocationStep = () => {
  const { location, currentLocationLoader, disabledButtons } = useSelector(
    (state) => state.RegisterReducer,
  )

  const streetRef = useRef(null)
  const numberRef = useRef(null)
  const complementRef = useRef(null)

  return (
    <ScrollView style={Styles.wrapper}>
      <View style={Styles.container}>
        <ApButton
          type={ApButtonTypes.PRIMARY}
          containerStyle={Styles.buttonMargin}
          bold={location.stateName}
          style={Styles.button}
          label={location.stateName || strings('register.state')}
          onPress={() => onShowModal(LocationType.STATE)}
        />
        <ApButton
          type={ApButtonTypes.PRIMARY}
          containerStyle={Styles.buttonMargin}
          bold={location.cityName}
          style={Styles.button}
          label={location.cityName || strings('register.city')}
          disabled={!location.stateName || disabledButtons}
          onPress={() => onShowModal(LocationType.CITY)}
        />
        <ApTextInput
          containerStyle={Styles.districtInput}
          type={ApTextInputTypes.SECONDARY}
          value={location.district}
          placeholder={strings('register.district')}
          disabled={!location.cityName}
          returnKeyType="next"
          onSubmitEditing={() => streetRef.current.focus()}
        />
        <ApTextInput
          inputRef={streetRef}
          type={ApTextInputTypes.SECONDARY}
          value={location.district}
          placeholder={strings('register.street')}
          disabled={!location.cityName}
          returnKeyType="next"
          onSubmitEditing={() => numberRef.current.focus()}
        />
        <ApTextInput
          inputRef={numberRef}
          type={ApTextInputTypes.SECONDARY}
          value={location.district}
          placeholder={strings('register.number')}
          disabled={!location.cityName}
          returnKeyType="next"
          onSubmitEditing={() => complementRef.current.focus()}
        />
        <ApTextInput
          inputRef={complementRef}
          optional
          type={ApTextInputTypes.SECONDARY}
          value={location.district}
          placeholder={strings('register.complement')}
          disabled={!location.cityName}
          returnKeyType="done"
        />
      </View>
    </ScrollView>
  )
}
