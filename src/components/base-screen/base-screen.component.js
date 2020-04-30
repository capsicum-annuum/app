import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, Keyboard } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const BaseScreen = ({
  children,
  keyboardDidHide,
  keyboardDidShow,
  keyboardWillHide,
  keyboardWillShow,
}) => {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    Keyboard.addListener('keyboardWillHide', keyboardWillHide)
    Keyboard.addListener('keyboardWillShow', keyboardWillShow)

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide)
      Keyboard.removeListener('keyboardWillHide', keyboardWillHide)
      Keyboard.removeListener('keyboardWillShow', keyboardWillShow)
    }
  }, [])

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#15CA9E', '#4AAECB']}>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </LinearGradient>
  )
}
