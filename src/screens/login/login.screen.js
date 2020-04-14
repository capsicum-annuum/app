import React from 'react'
import { View, Text } from 'react-native'
import { ApButton } from 'app-components'

export const LoginScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <ApButton />
    </View>
  )
}
