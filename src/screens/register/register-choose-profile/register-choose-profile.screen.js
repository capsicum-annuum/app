import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ApButton, BaseScreen } from 'app-components'
import { useNavigation } from '@react-navigation/native'
import { BottomSheet } from './components'
import { Screens, Role } from 'app-constants'

import Styles from './register-choose-profile.style'

const CHOOSE_PROFILE = 'Escolha o perfil mais\nadequado para você'
const WHICH_PROFILE = 'Não sabe qual perfil\nescolher?'
const CLICK_HERE = ' Clique aqui'
const chooseProfileImage = require('../../../assets/images/choose-profile.png')

export const RegisterChooseProfileScreen = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false)

  const navigation = useNavigation()

  const toggleBottomSheetVisibility = () => {
    setBottomSheetVisible(!bottomSheetVisible)
  }

  const navigateToRegisterScreen = (role) => {
    navigation.navigate(Screens.REGISTER_SCREEN, { role })
  }

  return (
    <BaseScreen>
      <View style={Styles.container}>
        <View style={Styles.wrapper}>
          <Text style={Styles.headerText}>{CHOOSE_PROFILE}</Text>
          <View style={Styles.buttonContainer}>
            <ApButton
              text="Voluntário"
              secondaryColor="#FFF"
              primaryColor="#2B727A"
              onPress={() => navigateToRegisterScreen(Role.VOLUNTARY)}
            />
            <ApButton
              text="Organização"
              secondaryColor="#FFF"
              primaryColor="#2B727A"
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
            {WHICH_PROFILE}
            <Text style={Styles.clickHereText}>{CLICK_HERE}</Text>
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
