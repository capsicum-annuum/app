import React, { useRef, useState } from 'react'
import { View, ScrollView } from 'react-native'
import {
  ApButton,
  ApButtonTypes,
  ApTextInput,
  ApTextInputTypes,
} from 'app-components'
import { LocationType } from 'app-constants'
import { strings } from 'app-locales'
import { RegisterActions } from 'app-redux'
import { useSelector, useDispatch } from 'react-redux'
import { ListLocationModal } from '../../../components'

import Styles from './organization-location-step.style'

export const OrganizationLocationStep = () => {
  const [modalConfig, setModalConfig] = useState({
    isVisible: false,
    type: '',
  })

  const { location } = useSelector((state) => state.RegisterReducer)

  const dispatch = useDispatch()

  const streetRef = useRef(null)
  const numberRef = useRef(null)
  const complementRef = useRef(null)

  const handleChange = (value, type) => {
    dispatch(
      RegisterActions.updateUserData({
        location: { ...location, [type]: value },
      }),
    )
  }

  const onHideModal = () => {
    setModalConfig({ isVisible: false, type: '' })
  }

  const onShowModal = (type) => {
    setModalConfig({ isVisible: true, type })
  }

  return (
    <ScrollView style={Styles.wrapper}>
      <View style={Styles.container}>
        <ListLocationModal
          isVisible={modalConfig.isVisible}
          locationType={modalConfig.type}
          closeCallback={onHideModal}
        />
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
          disabled={!location.stateName}
          onPress={() => onShowModal(LocationType.CITY)}
        />
        <ApTextInput
          containerStyle={Styles.districtInput}
          type={ApTextInputTypes.SECONDARY}
          value={location.district}
          placeholder={strings('register.district')}
          disabled={!location.cityName}
          onChangeText={(value) => handleChange(value, 'district')}
          returnKeyType="next"
          onSubmitEditing={() => streetRef.current.focus()}
        />
        <ApTextInput
          inputRef={streetRef}
          type={ApTextInputTypes.SECONDARY}
          value={location.streetName}
          placeholder={strings('register.street')}
          onChangeText={(value) => handleChange(value, 'streetName')}
          disabled={!location.cityName}
          returnKeyType="next"
          onSubmitEditing={() => numberRef.current.focus()}
        />
        <ApTextInput
          inputRef={numberRef}
          type={ApTextInputTypes.SECONDARY}
          value={location.addressNumber}
          placeholder={strings('register.number')}
          onChangeText={(value) => handleChange(value, 'addressNumber')}
          disabled={!location.cityName}
          returnKeyType="next"
          onSubmitEditing={() => complementRef.current.focus()}
        />
        <ApTextInput
          inputRef={complementRef}
          optional
          type={ApTextInputTypes.SECONDARY}
          value={location.complement}
          placeholder={strings('register.complement')}
          onChangeText={(value) => handleChange(value, 'complement')}
          disabled={!location.cityName}
          returnKeyType="done"
        />
      </View>
    </ScrollView>
  )
}
