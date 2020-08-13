import React, { useState, useCallback, useEffect } from 'react'
import { View } from 'react-native'
import { ApButton, RegisterWizard } from 'app-components'
import { Screens } from 'app-constants'
import { registerVoluntarySteps, Hooks } from 'app-utils'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'
import { useToaster } from 'app-context'
import { ConfirmLeaveModal } from './components'

import Styles from './register-info.style'

export const RegisterInfoScreen = ({ navigation }) => {
  const { role, registerRequestErrorData } = useSelector(
    (state) => state.RegisterReducer,
  )

  const [currentStep, setCurrentStep] = useState(registerVoluntarySteps[0])
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { renderContent, validator } = currentStep
  const { useBackButton } = Hooks
  const { queue } = useToaster()
  const dispatch = useDispatch()

  useEffect(() => {
    if (registerRequestErrorData) {
      queue(strings('register.error_try_again'))

      dispatch(RegisterActions.clearRegisterRequest)
    }
  }, [registerRequestErrorData])

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible)
  }

  const nextStep = () => {
    if (currentStepIndex + 1 === registerVoluntarySteps.length) {
      navigation.navigate(Screens.REGISTER_FINISH_SCREEN)
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
      toggleModalVisible()
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
    <>
      <View style={Styles.container}>
        <RegisterWizard
          steps={registerVoluntarySteps}
          currentStep={currentStep}
        />
        <View style={Styles.content}>{renderContent()}</View>
        <BottomSheet />
      </View>
      <ConfirmLeaveModal
        isVisible={isModalVisible}
        closeCallback={toggleModalVisible}
      />
    </>
  )
}
