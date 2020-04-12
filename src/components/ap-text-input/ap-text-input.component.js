import React, { useCallback } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { ApIcon } from '../ap-icon/ap-icon.component'

import Styles from './ap-text-input.style'

export const ApTextInput = (props) => {
  const {
    value,
    optional,
    aditional,
    aditionalCallback,
    alert,
    alertCallback,
  } = props

  const OptionalText = useCallback(() => {
    if (optional && !value) {
      return (
        <Text
          style={[
            Styles.optionalText,
            aditional ? Styles.optionalLeft : Styles.optionalRight,
          ]}
        >
          Opcional
        </Text>
      )
    }

    return null
  }, [optional, value, aditional])

  const AditionalIcon = useCallback(() => {
    if (aditional) {
      return (
        <TouchableOpacity onPress={aditionalCallback} style={Styles.aditional}>
          <ApIcon name="help-outline" style={Styles.icon} />
        </TouchableOpacity>
      )
    }

    return null
  }, [aditional, aditionalCallback])

  const Alert = useCallback(() => {
    if (alert) {
      return (
        <TouchableOpacity onPress={alertCallback} style={Styles.alert}>
          <ApIcon name="alert-outline" style={Styles.alertIcon} />
        </TouchableOpacity>
      )
    }

    return null
  }, [alert, alertCallback])

  return (
    <View style={Styles.container}>
      <TextInput
        style={[Styles.input, !!value && Styles.bold]}
        placeholderTextColor="#FFF"
        {...props}
      />

      <OptionalText />
      <AditionalIcon />
      <Alert />
    </View>
  )
}
