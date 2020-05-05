import React, { useState, useCallback } from 'react'
import { BaseScreen } from 'app-components'
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import { Role, Screens } from 'app-constants'
import { RegisterForm } from './components'

import Styles from './register.style'

const VOLUNTARY = 'Voluntário'
const ORGANIZATION = 'Organização'
const HAS_ACCOUNT = 'Já possui conta? '
const ACCESS_HERE = 'Acesse aqui'

const getHeaderText = (role) => {
  const text = role === Role.VOLUNTARY ? VOLUNTARY : ORGANIZATION

  return `Cadastro de\n${text}`
}

export const RegisterScreen = ({ route, navigation }) => {
  const [showHasAccount, setShowHasAccount] = useState(true)
  const { role } = route.params
  const headerText = getHeaderText(role)

  const navigateToLoginScreen = () => {
    navigation.navigate(Screens.LOGIN_SCREEN)
  }

  const onSubmit = (values) => {
    alert(JSON.stringify(values))

    navigation.navigate(Screens.REGISTER_COMPLETE_SCREEN, { role })
  }

  const HasAccount = useCallback(() => {
    if (showHasAccount) {
      return (
        <TouchableOpacity
          style={Styles.hasAccountContainer}
          onPress={navigateToLoginScreen}
        >
          <Text style={Styles.hasAccountText}>
            {HAS_ACCOUNT}
            <Text style={Styles.accessHereText}>{ACCESS_HERE}</Text>
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
