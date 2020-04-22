import React, { useCallback } from 'react'
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native'

import Styles from './ap-button.styles'

export const ApButton = (props) => {
  const {
    enabled,
    light,
    loading,
    text,
    style,
    onPress,
    primaryColor,
    secondaryColor,
  } = props
  const opacity = !enabled || loading ? 0.4 : 1
  const buttonColor =
    enabled && light && !loading ? primaryColor : secondaryColor
  const buttonTextColor =
    enabled && light && !loading ? secondaryColor : primaryColor

  const Content = useCallback(() => {
    return loading ? (
      <ActivityIndicator size="large" color={buttonTextColor} />
    ) : (
      <Text style={[Styles.text, { color: buttonTextColor }]}>{text}</Text>
    )
  }, [props])

  return (
    <View style={Styles.container} opacity={opacity}>
      <TouchableOpacity
        disabled={!enabled || loading}
        style={[Styles.button, style, { backgroundColor: buttonColor }]}
        onPress={onPress}
      >
        <Content />
      </TouchableOpacity>
    </View>
  )
}

ApButton.defaultProps = {
  light: false,
  enabled: true,
  loading: false,
  text: 'Button',
  primaryColor: '#FFF',
  secondaryColor: '#3EB5C1',
  onPress: () => {},
}
