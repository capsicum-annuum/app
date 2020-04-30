import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Screens } from 'app-constants'

const DONT_HAVE_ACCOUNT = 'Não possui conta? '
const CREATE_HERE = 'Crie aqui'

import Styles from './register-text.style'

export const RegisterText = () => {
  const navigation = useNavigation()

  const goToRegister = () => {
    navigation.navigate(Screens.REGISTER)
  }

  return (
    <TouchableOpacity onPress={goToRegister}>
      <Text style={Styles.start}>
        {DONT_HAVE_ACCOUNT}
        <Text style={Styles.end}>{CREATE_HERE}</Text>
      </Text>
    </TouchableOpacity>
  )
}
