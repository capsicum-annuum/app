import React, { useCallback, useEffect } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import { ApButton, BaseScreen } from 'app-components'
import { useSelector, useDispatch } from 'react-redux'
import { LoginActions } from 'app-redux'
import { useToaster } from 'app-context'
import { Screens } from 'app-constants'
import { LoginForm } from './components'

import Styles from './login.style'
import HeaderLogo from '../../assets/images/logo.png'

const FORGOT_PASSWORD = 'Esqueci a senha'
const OR = 'OU'
const DONT_HAVE_ACCOUNT = 'Não possui conta? '
const CREATE_HERE = 'Crie aqui'

export const LoginScreen = ({ navigation }) => {
  const { error, success } = useSelector((state) => state.LoginReducer)

  const { queue } = useToaster()
  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      queue('Algo de errado aconteceu')
    }
  }, [error])

  useEffect(() => {
    if (success) {
      navigation.navigate(Screens.MAIN_STACK)

      dispatch(LoginActions.clear())
    }
  }, [success])

  const onSubmit = (values) => {
    Keyboard.dismiss()

    dispatch(LoginActions.loginRequest(values))
  }

  const goToRegister = () => {
    navigation.navigate(Screens.REGISTER_CHOOSE_PROFILE_SCREEN)
  }

  const Register = useCallback(() => {
    return (
      <TouchableOpacity onPress={goToRegister}>
        <Text style={Styles.registerTextStart}>
          {DONT_HAVE_ACCOUNT}
          <Text style={Styles.registerTextEnd}>{CREATE_HERE}</Text>
        </Text>
      </TouchableOpacity>
    )
  }, [])

  return (
    <BaseScreen>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.container}>
          <Image source={HeaderLogo} style={Styles.logo} />
          <LoginForm onSubmit={onSubmit} />
          <View style={Styles.bottomContainer}>
            <TouchableOpacity>
              <Text style={Styles.forgotPasswordText}>{FORGOT_PASSWORD}</Text>
            </TouchableOpacity>
            <View style={Styles.orContainer}>
              <View style={Styles.line} />
              <Text style={Styles.or}>{OR}</Text>
              <View style={Styles.line} />
            </View>
            <ApButton
              text="Facebook"
              style={Styles.facebookButton}
              secondaryColor="#FFF"
              primaryColor="#2B727A"
            />
          </View>
          <Register />
        </View>
      </SafeAreaView>
    </BaseScreen>
  )
}
