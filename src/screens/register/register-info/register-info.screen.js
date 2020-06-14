import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { ApButton, RegisterWizard } from 'app-components'
import { registerVoluntarySteps, Hooks } from 'app-utils'
import { useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'

import Styles from './register-info.style'

export const RegisterInfoScreen = () => {
  const [currentStep, setCurrentStep] = useState(registerVoluntarySteps[0])
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const { renderContent, validator } = currentStep
  const { useBackButton } = Hooks
  const dispatch = useDispatch()

  const nextStep = () => {
    if (currentStepIndex === registerVoluntarySteps.length) {
      // Finaliza o cadastro
    } else {
      const nextStepIndex = currentStepIndex + 1

      setCurrentStepIndex(nextStepIndex)
      setCurrentStep(registerVoluntarySteps[nextStepIndex])
    }
  }

  const previousStep = () => {
    if (currentStepIndex !== 0) {
      const previousStepIndex = currentStepIndex - 1

      setCurrentStepIndex(previousStepIndex)
      setCurrentStep(registerVoluntarySteps[previousStepIndex])
    } else {
      dispatch(RegisterActions.clearUserData())
    }

    return true
  }

  useBackButton(previousStep)

  const BottomSheet = useCallback(() => {
    const { label, disabled } = validator()

    return (
      <View style={Styles.bottomSheet}>
        <ApButton onPress={nextStep} label={label} disabled={disabled} />
      </View>
    )
  }, [currentStep])

  return (
    <View style={Styles.container}>
      <RegisterWizard
        steps={registerVoluntarySteps}
        currentStep={currentStep}
      />
      <View style={Styles.content}>{renderContent()}</View>
      <BottomSheet />
    </View>
  )
}
