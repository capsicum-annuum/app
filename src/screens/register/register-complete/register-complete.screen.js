import React from 'react'
import { View, Text } from 'react-native'
import { BaseScreen } from 'app-components'

export const RegisterCompleteScreen = ({ route }) => {
  const { role } = route.params
  
  return (
    <BaseScreen>
      <View>
        <Text>Register Complete Screen</Text>
      </View>
    </BaseScreen>
  )
}
