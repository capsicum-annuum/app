import React, { useState, useCallback } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { ApTextInput } from '../ap-text-input/ap-text-input.component'
import { ApIcon } from '../ap-icon/ap-icon.component'

import Styles from './ap-password-input.style'

export const ApPasswordInput = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const SecurityIcon = useCallback(() => {
    const iconName = secureTextEntry ? 'eye' : 'eye-hide'

    return <ApIcon name={iconName} style={Styles.icon} />
  }, [secureTextEntry])

  return (
    <View style={Styles.container}>
      <ApTextInput {...props} secureTextEntry={secureTextEntry} />
      <TouchableOpacity
        style={Styles.touchable}
        onPress={toggleSecureTextEntry}
      >
        <SecurityIcon />
      </TouchableOpacity>
    </View>
  )
}
