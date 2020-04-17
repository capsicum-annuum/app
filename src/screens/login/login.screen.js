import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { general, colors } from 'app-theme'

export const LoginScreen = () => {
  return (
    <View style={general.container}>
      <LinearGradient
        colors={[colors.color5, colors.color7]}
        style={general.gradient}
      />
      <Text>Login Screen</Text>
    </View>
  )
}
