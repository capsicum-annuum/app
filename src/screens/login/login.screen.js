import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { general, colors } from 'app-theme'
import { strings } from 'app-locales'

export const LoginScreen = () => {
  return (
    <View style={general.container}>
      <LinearGradient
        colors={[colors.color5, colors.color7]}
        style={general.gradient}
      />
      <Text>{strings('hello')}</Text>
    </View>
  )
}
