import React, { useCallback } from 'react'
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { ApIcon } from 'app-components'

import Styles from './ap-button.styles'

export const ApButtonTypes = {
  DEFAULT: 'defaultStyle',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

export const ApButtonSizes = {
  LARGE: 'large',
  SMALL: 'small',
}

export const ApButton = ({
  bold,
  label,
  onPress,
  loading,
  disabled,
  iconName,
  buttonStyle,
  containerStyle,
  size = ApButtonSizes.LARGE,
  type = ApButtonTypes.DEFAULT,
}) => {
  const colors = Styles[type]
  const { button, text, icon } = Styles[size]
  const buttonColors = disabled ? colors.disabledButton : colors.button
  const textColors = disabled ? colors.disabledText : colors.text
  const iconColors = disabled ? colors.disabledIcon : colors.icon

  const Content = useCallback(() => {
    return loading ? (
      <ActivityIndicator size={size} color={textColors.color} />
    ) : (
      <Text style={[text, textColors, bold && Styles.styles.bold]}>
        {label}
      </Text>
    )
  }, [loading, label])

  return (
    <View style={[Styles.styles.container, containerStyle]}>
      {iconName && <ApIcon name={iconName} style={[icon, iconColors]} />}
      <TouchableOpacity
        disabled={disabled || loading}
        style={[button, buttonColors, buttonStyle]}
        onPress={onPress}
      >
        <Content />
      </TouchableOpacity>
    </View>
  )
}
