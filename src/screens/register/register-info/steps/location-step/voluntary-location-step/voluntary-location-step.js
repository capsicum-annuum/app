import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { ApButton, ApTextInput, ApButtonTypes } from 'app-components'
import { LocationType } from 'app-constants'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'
import { strings } from 'app-locales'
import { ListLocationModal } from '../../../components'

import Styles from './voluntary-location-step.style'

export const VoluntaryLocationStep = () => {
  const [modalConfig, setModalConfig] = useState({
    isVisible: false,
    type: '',
  })
  const { location, currentLocationLoader, disabledButtons } = useSelector(
    (state) => state.RegisterReducer,
  )

  const dispatch = useDispatch()

  const activeLocation = () => {
    dispatch(RegisterActions.fetchCurrentLocationRequest())
  }

  const handleChangeDistrict = (value) => {
    dispatch(
      RegisterActions.updateUserData({
        location: { ...location, district: value },
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
    <KeyboardAvoidingView behavior="padding" style={Styles.wrapper}>
      <ListLocationModal
        isVisible={modalConfig.isVisible}
        locationType={modalConfig.type}
        closeCallback={onHideModal}
      />
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
          type={ApButtonTypes.SECONDARY}
          optional
          onChangeText={handleChangeDistrict}
          value={location.district}
          returnKeyType="done"
          placeholder={strings('register.district')}
          disabled={!location.cityName}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
