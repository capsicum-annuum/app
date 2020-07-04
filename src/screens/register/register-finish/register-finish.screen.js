import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import { BaseScreen } from 'app-components'
import { colors } from 'app-theme'
import { Role, Screens } from 'app-constants'
import { useSelector, useDispatch } from 'react-redux'
import { strings } from 'app-locales'
import { RegisterActions } from 'app-redux'

import Styles from './register-finish.style'

const rightImage = require('../../../assets/images/finish-register-right.png')
const leftImage = require('../../../assets/images/finish-register-left.png')

export const RegisterFinishScreen = ({ navigation }) => {
  const {
    role,
    registerRequestSuccessData,
    registerRequestErrorData,
  } = useSelector((state) => state.RegisterReducer)
  const isVoluntary = Role.VOLUNTARY === role

  const dispatch = useDispatch()

  useEffect(() => {
    if (registerRequestSuccessData) {
      navigation.navigate(Screens.MAIN_STACK)
    }
  }, [registerRequestSuccessData])

  useEffect(() => {
    if (registerRequestErrorData) {
      navigation.goBack()
    }
  }, [registerRequestErrorData])

  useEffect(() => {
    dispatch(RegisterActions.registerRequest())
  }, [])

  const text = isVoluntary
    ? strings('register.creating_volunteer_profile')
    : strings('register.creating_organization_profile')

  return (
    <BaseScreen>
      <View style={Styles.container}>
        <ActivityIndicator size="large" color={colors.color1} />
        <Text style={Styles.text}>{text}</Text>
        <Image source={rightImage} style={Styles.rightImage} />
        {!isVoluntary && <Image source={leftImage} style={Styles.leftImage} />}
      </View>
    </BaseScreen>
  )
}
