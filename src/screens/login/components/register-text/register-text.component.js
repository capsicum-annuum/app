import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import Styles from './register-text.style'

export const RegisterText = () => {
  return (
    <TouchableOpacity>
      <Text style={Styles.registerTextStart}>
        {'Não possui conta? '}
        <Text style={Styles.registerTextEnd}>Crie aqui</Text>
      </Text>
    </TouchableOpacity>
  )
}
