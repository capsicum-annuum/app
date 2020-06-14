import React, { useState, useCallback, useEffect } from 'react'
import { BaseScreen } from 'app-components'
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import { strings } from 'app-locales'
import { Role, Screens } from 'app-constants'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'
import { useToaster } from 'app-context'
import { RegisterForm } from './components'

import Styles from './register.style'

const getHeaderText = (role) => {
  return role === Role.VOLUNTARY
    ? strings('register.voluntary_register')
    : strings('register.organization_register')
}

export const RegisterScreen = ({ route, navigation }) => {
  const [showHasAccount, setShowHasAccount] = useState(true)
  const { role } = route.params
  const headerText = getHeaderText(role)

  const { queue } = useToaster()
  const dispatch = useDispatch()

  const { checkBaseUserDataSuccess, checkBaseUserDataError } = useSelector(
    (state) => state.RegisterReducer,
  )

  const navigateToRegisterCompleteScreen = () => {
    navigation.navigate(Screens.REGISTER_COMPLETE_SCREEN, { role })
  }

  const navigateToLoginScreen = () => {
    navigation.navigate(Screens.LOGIN_SCREEN)
  }

  useEffect(() => {
    if (checkBaseUserDataSuccess) {
      dispatch(RegisterActions.clearCheckBaseUserData())

      navigateToRegisterCompleteScreen()
    }
  }, [checkBaseUserDataSuccess])

  useEffect(() => {
    if (checkBaseUserDataError) {
      queue('Algo de errado acontenceu')

      dispatch(RegisterActions.clearCheckBaseUserData())
    }
  }, checkBaseUserDataError)

  const onSubmit = (values) => {
    dispatch(RegisterActions.setBaseUserData(values))
    dispatch(RegisterActions.checkBaseUserDataRequest(values))
  }

  const HasAccount = useCallback(() => {
    if (showHasAccount) {
      return (
        <TouchableOpacity
          style={Styles.hasAccountContainer}
          onPress={navigateToLoginScreen}
        >
          <Text style={Styles.hasAccountText}>
            {strings('register.has_account')}
            <Text style={Styles.accessHereText}>
              {strings('register.access_here')}
            </Text>
          </Text>
        </TouchableOpacity>
      )
    }

    return null
  }, [showHasAccount])

  return (
    <BaseScreen
      keyboardDidHide={() => setShowHasAccount(true)}
      keyboardDidShow={() => setShowHasAccount(false)}
    >
      <KeyboardAvoidingView behavior="padding" style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerText}>{headerText}</Text>
        </View>
        <RegisterForm role={role} onSubmit={onSubmit} />
        <HasAccount />
      </KeyboardAvoidingView>
    </BaseScreen>
  )
}
