import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import { BaseScreen, ApIcon } from 'app-components'
import { colors } from 'app-theme'
import { Role, Screens } from 'app-constants'
import { useSelector, useDispatch } from 'react-redux'
import { strings } from 'app-locales'
import { RegisterActions } from 'app-redux'

import Styles from './register-finish.style'

import rightImage from '../../../assets/images/finish-register-right.png'
import leftImage from '../../../assets/images/finish-register-left.png'

const DELAY_TO_REDIRECT = 3000

export const RegisterFinishScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true)
  const {
    role,
    registerRequestSuccessData,
    registerRequestErrorData,
  } = useSelector((state) => state.RegisterReducer)
  const isVoluntary = Role.VOLUNTARY === role

  const dispatch = useDispatch()

  const redirectAfterTimeout = () => {
    setTimeout(() => {
      navigation.navigate(Screens.MAIN_STACK)
    }, DELAY_TO_REDIRECT)
  }

  useEffect(() => {
    if (registerRequestSuccessData) {
      setIsLoading(false)
      redirectAfterTimeout()
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

  const Loading = () => {
    return (
      <>
        <ActivityIndicator size="large" color={colors.color1} />
        <Text style={Styles.text}>{text}</Text>
      </>
    )
  }

  const Success = () => {
    return (
      <>
        <ApIcon name="check" style={Styles.icon} />
        <Text style={Styles.text}>
          {strings('register.created_profile_success')}
        </Text>
      </>
    )
  }

  return (
    <BaseScreen>
      <View style={Styles.container}>
        {isLoading ? <Loading /> : <Success />}
        <Image source={rightImage} style={Styles.rightImage} />
        {!isVoluntary && <Image source={leftImage} style={Styles.leftImage} />}
      </View>
    </BaseScreen>
  )
}
