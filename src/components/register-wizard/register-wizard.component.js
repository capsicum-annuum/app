import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Styles from './register-wizard.style'

export const RegisterWizard = ({ steps = [], currentStep }) => {
  const Index = () => {
    return (
      <View style={Styles.index}>
        {steps.map((step) => {
          const selected = currentStep.title === step.title
          return (
            <View
              key={step.title}
              style={[Styles.dot, selected && Styles.selectedDot]}
            />
          )
        })}
      </View>
    )
  }

  const { title, description } = currentStep

  return (
    <LinearGradient style={Styles.container} colors={['#15CA9E', '#4AAECB']}>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.content}>{description}</Text>
      <Index />
    </LinearGradient>
  )
}
