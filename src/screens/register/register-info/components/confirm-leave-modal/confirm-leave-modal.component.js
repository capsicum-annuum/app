import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ApButton } from 'app-components'
import Modal from 'react-native-modal'
import { Screens } from 'app-constants'
import { useNavigation } from '@react-navigation/native'
import { strings } from 'app-locales'
import { useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'

import Styles from './confirm-leave-modal.style'

export const ConfirmLeaveModal = ({ closeCallback, isVisible }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const onLeave = () => {
    closeCallback()

    dispatch(RegisterActions.clearUserData())
    navigation.navigate(Screens.LOGIN_SCREEN)
  }

  return (
    <Modal
      style={Styles.wrapper}
      onBackButtonPress={closeCallback}
      onBackdropPress={closeCallback}
      onRequestClose={closeCallback}
      isVisible={isVisible}
    >
      <View style={Styles.container}>
        <Text style={Styles.title}>{strings('register.realy_want_leave')}</Text>
        <Text style={Styles.description}>
          {strings('register.wont_be_saved')}
        </Text>
        <ApButton
          label={strings('register.continue_register')}
          style={Styles.facebookButton}
          onPress={closeCallback}
        />
        <TouchableOpacity style={Styles.buttonContainer} onPress={onLeave}>
          <Text style={Styles.buttonText}>
            {strings('register.want_leave')}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}
