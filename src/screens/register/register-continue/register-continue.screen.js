import React from 'react'
import { View, Text, Image } from 'react-native'
import { BaseScreen, ApButton, ApButtonTypes } from 'app-components'
import { Role, Screens } from 'app-constants'
import { strings } from 'app-locales'

import Styles from './register-continue.style'

const voluntaryImage = require('../../../assets/images/volunteer.png')
const organizationImage = require('../../../assets/images/organization.png')

export const RegisterContinueScreen = ({ route, navigation }) => {
  const { role } = route.params
  const isVoluntary = role === Role.VOLUNTARY

  const title = isVoluntary
    ? strings('register.finish_voluntary_register')
    : strings('register.finish_organization_register')
  const image = isVoluntary ? voluntaryImage : organizationImage
  const dimensions = isVoluntary
    ? { width: 202, height: 156 }
    : { width: 220, height: 154 }

  const navigateRegisterInfoScreen = () => {
    navigation.navigate(Screens.REGISTER_INFO_SCREEN, { role })
  }

  return (
    <BaseScreen>
      <View style={Styles.container}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.content}>
          {strings('register.to_finish_register')}
        </Text>
        <ApButton
          label={strings('register.lets_go')}
          buttonStyle={{ marginTop: 45 }}
          type={ApButtonTypes.SECONDARY}
          onPress={navigateRegisterInfoScreen}
        />
        <Image
          source={image}
          style={[Styles.volunteerImage, { ...dimensions }]}
        />
      </View>
    </BaseScreen>
  )
}
