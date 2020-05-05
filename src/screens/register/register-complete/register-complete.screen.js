import React from 'react'
import { View, Text, Image } from 'react-native'
import { BaseScreen, ApButton } from 'app-components'
import { Role, Screens } from 'app-constants'

import Styles from './register-complete.style'

const voluntaryImage = require('../../../assets/images/volunteer.png')
const organizationImage = require('../../../assets/images/organization.png')

const voluntaryTitle = 'Que bom ter você aqui!'
const organizationTitle = 'Que bom ter a sua\norganização aqui!'
const content =
  'Para finalizar o seu cadastro, precisamos\nde mais algumas informações.'

export const RegisterCompleteScreen = ({ route, navigation }) => {
  const { role } = route.params
  const isVoluntary = role === Role.VOLUNTARY

  const title = isVoluntary ? voluntaryTitle : organizationTitle
  const image = isVoluntary ? voluntaryImage : organizationImage
  const dimensions = isVoluntary
    ? { width: 202, height: 156 }
    : { width: 220, height: 154 }

  const navigateToRegisterPicture = () => {
    navigation.navigate(Screens.REGISTER_PICTURE_SCREEN, { role })
  }

  return (
    <BaseScreen>
      <View style={Styles.container}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.content}>{content}</Text>
        <ApButton
          text="Vamos lá"
          style={{ marginTop: 45 }}
          secondaryColor="#FFF"
          primaryColor="#2B727A"
          onPress={navigateToRegisterPicture}
        />
        <Image
          source={image}
          style={[Styles.volunteerImage, { ...dimensions }]}
        />
      </View>
    </BaseScreen>
  )
}
