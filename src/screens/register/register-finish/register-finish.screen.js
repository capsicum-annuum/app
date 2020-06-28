import React from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import { BaseScreen } from 'app-components'
import { strings } from 'app-locales'
import { colors } from 'app-theme'

import Styles from './register-finish.style'

const rightImage = require('../../../assets/images/finish-register-right.png')
const leftImage = require('../../../assets/images/finish-register-left.png')

export const RegisterFinishScreen = () => {
  const isVoluntary = false

  const text = isVoluntary
    ? strings('register.creating_volunteer_profile')
    : strings('register.creating_organization_profile')

  return (
    <BaseScreen>
      <View style={Styles.container}>
        <ActivityIndicator size="large" color={colors.color1} />
        <Text style={Styles.text}>{text}</Text>
        <Image source={rightImage} style={Styles.rightImage} />
        {!isVoluntary && <Image source={leftImage} style={Styles.leftImage} />}
      </View>
    </BaseScreen>
  )
}
