import React, { useCallback } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { ApIcon } from 'app-components'
import { strings } from 'app-locales'

import Styles from './ap-text-input.style'

export const ApTextInputTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

export const ApTextInput = (props) => {
  const {
    value,
    iconName,
    iconCallback = () => {},
    alert,
    alertCallback = () => {},
    optional,
    multiline,
    disabled,
    borderWidth = 1,
    type = ApTextInputTypes.PRIMARY,
  } = props
  const paddingRight = iconName ? 50 : 16
  const styles = Styles[type]
  const inputStyle = disabled ? styles.disabledInput : styles.input
  const optionalStyle = disabled ? styles.optionalText : styles.optionalText
  const additionalStyle = disabled
    ? styles.disabledAdditionalIcon
    : styles.additionalIcon
  const textStyle =
    type === ApTextInputTypes.PRIMARY ? Styles.styles.bold : Styles.styles.gray

  const Optional = useCallback(() => {
    const optionalPosition =
      iconName && !multiline
        ? Styles.styles.optionalLeft
        : Styles.styles.optionalRight

    return (
      <Text style={[optionalStyle, optionalPosition]}>
        {strings('ap_text_input.optional')}
      </Text>
    )
  }, [optional, value, iconName])

  const Additional = useCallback(() => {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={iconCallback}
        style={Styles.styles.additional}
      >
        <ApIcon name={iconName} style={additionalStyle} />
      </TouchableOpacity>
    )
  }, [iconName, iconCallback])

  const Alert = useCallback(() => {
    const alertIcon =
      type === ApTextInputTypes.PRIMARY ? 'alert-outline' : 'alert'

    return (
      <TouchableOpacity
        onPress={() => alertCallback(alert)}
        style={styles.alert}
      >
        <ApIcon name={alertIcon} style={styles.alertIcon} />
      </TouchableOpacity>
    )
  }, [alert, alertCallback])

  return (
    <View style={Styles.styles.container}>
      <TextInput
        editable={!disabled}
        style={[inputStyle, value && textStyle, { borderWidth, paddingRight }]}
        placeholderTextColor={inputStyle.color}
        {...props}
      />
      {optional && !value && <Optional />}
      {iconName && <Additional />}
      {alert && <Alert />}
    </View>
  )
}
