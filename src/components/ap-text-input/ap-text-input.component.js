import React, { useCallback } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { colors } from 'app-theme'
import { ApIcon } from '../ap-icon/ap-icon.component'

import Styles from './ap-text-input.style'

const SECONDARY = 'secondary'

export const ApTextInput = (props) => {
  const {
    value,
    optional,
    additional,
    additionalCallback,
    alert,
    alertCallback,
    inputRef,
    colorType,
    containerStyle,
    inputStyle,
  } = props

  const isSecondary = colorType === SECONDARY
  const borderColor = isSecondary ? colors.color8 : colors.color1
  const textColor = isSecondary ? colors.gray2 : colors.color1
  const placeholderTextColor = isSecondary ? colors.color9 : colors.color1
  const optionalTextColor = isSecondary ? colors.gray1 : colors.color3

  const OptionalText = useCallback(() => {
    if (optional && !value) {
      return (
        <Text
          style={[
            Styles.optionalText,
            { color: optionalTextColor },
            additional ? Styles.optionalLeft : Styles.optionalRight,
          ]}
        >
          Opcional
        </Text>
      )
    }

    return null
  }, [optional, value, additional])

  const AdditionalIcon = useCallback(() => {
    if (additional) {
      return (
        <TouchableOpacity
          onPress={additionalCallback}
          style={Styles.additional}
        >
          <ApIcon name="help-outline" style={Styles.icon} />
        </TouchableOpacity>
      )
    }

    return null
  }, [additional, additionalCallback])

  const Alert = useCallback(() => {
    if (alert) {
      return (
        <TouchableOpacity
          onPress={() => alertCallback(alert)}
          style={Styles.alert}
        >
          <ApIcon name="alert-outline" style={Styles.alertIcon} />
        </TouchableOpacity>
      )
    }

    return null
  }, [alert, alertCallback])

  return (
    <View style={[Styles.container, containerStyle]}>
      <TextInput
        ref={inputRef}
        style={[
          Styles.input,
          !!value && Styles.bold,
          inputStyle,
          { color: textColor, borderColor },
        ]}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      <OptionalText />
      <AdditionalIcon />
      <Alert />
    </View>
  )
}
