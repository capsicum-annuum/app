import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ApButton, BaseScreen } from 'app-components'
import { BottomSheet } from './components'

import Styles from './register-choose-profile.style'

const CHOOSE_PROFILE = 'Escolha o perfil mais\nadequado para você'
const WHICH_PROFILE = 'Não sabe qual perfil\nescolher?'
const CLICK_HERE = ' Clique aqui'
const chooseProfileImage = require('../../../assets/images/choose-profile.png')

export const RegisterChooseProfileScreen = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false)

  const toggleBottomSheetVisibility = () => {
    setBottomSheetVisible(!bottomSheetVisible)
  }

  return (
    <BaseScreen>
      <View style={Styles.container}>
        <View style={Styles.wrapper}>
          <Text style={Styles.headerText}>{CHOOSE_PROFILE}</Text>
          <ApButton
            text="Voluntário"
            secondaryColor="#FFF"
            primaryColor="#2B727A"
          />
          <ApButton
            text="Organização"
            secondaryColor="#FFF"
            primaryColor="#2B727A"
          />
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
