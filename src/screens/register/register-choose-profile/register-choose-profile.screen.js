import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ApButton, ApButtonTypes, BaseScreen } from 'app-components'
import { useNavigation } from '@react-navigation/native'
import { Screens, Role } from 'app-constants'
import { strings } from 'app-locales'
import { useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'
import { BottomSheet } from './components'

import Styles from './register-choose-profile.style'

const chooseProfileImage = require('../../../assets/images/choose-profile.png')

export const RegisterChooseProfileScreen = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false)

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const toggleBottomSheetVisibility = () => {
    setBottomSheetVisible(!bottomSheetVisible)
  }

  const navigateToRegisterScreen = (role) => {
    dispatch(RegisterActions.setBaseUserData({ role }))

    navigation.navigate(Screens.REGISTER_SCREEN)
  }

  return (
    <BaseScreen>
      <View style={Styles.container}>
        <View style={Styles.wrapper}>
          <Text style={Styles.headerText}>
            {strings('register.choose_profile')}
          </Text>
          <View style={Styles.buttonContainer}>
            <ApButton
              label={strings('register.voluntary')}
              type={ApButtonTypes.SECONDARY}
              onPress={() => navigateToRegisterScreen(Role.VOLUNTARY)}
            />
            <ApButton
              label={strings('register.organization')}
              type={ApButtonTypes.SECONDARY}
              onPress={() => navigateToRegisterScreen(Role.ORGANIZATION)}
            />
          </View>
        </View>
        <Image source={chooseProfileImage} style={Styles.chooseProfileImage} />
        <TouchableOpacity
          onPress={toggleBottomSheetVisibility}
          style={Styles.bottomContainer}
        >
          <Text style={Styles.whichProfileText}>
            {strings('register.which_profile')}
            <Text style={Styles.clickHereText}>
              {strings('register.click_here')}
            </Text>
          </Text>
        </TouchableOpacity>
        <BottomSheet
          isVisible={bottomSheetVisible}
          closeCallback={toggleBottomSheetVisibility}
        />
      </View>
    </BaseScreen>
  )
}
