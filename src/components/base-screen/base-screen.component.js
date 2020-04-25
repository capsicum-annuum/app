import React from 'react'
import { SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const BaseScreen = ({ children }) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={['#15CA9E', '#4AAECB']}>
      <SafeAreaView />
      {children}
    </LinearGradient>
  )
}
