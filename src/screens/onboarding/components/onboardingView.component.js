import React from 'react'
import { Text, View, Image, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { general } from 'app-theme'
import { ApButton } from 'app-components'
import { Screens } from 'app-constants'

import Styles from './onboardingView.style'
import HeaderLogo from '../../../assets/images/header-logo.png'

const OnboardingView = (props) => {
  const { enableContinuar, illustration, text } = props
  const navigation = useNavigation()

  const marginBottomText = enableContinuar ? -20 : 40
  
  const goToLogin = () => {
    navigation.navigate(Screens.LOGIN)
  }

  const showButton = () => (
    <ApButton
      label='Continuar'
      onPress={goToLogin}
      type='primary'
      containerStyle={{marginBottom: 60}}
    />
  )

  return (
    <>
      <SafeAreaView />
      <View style={[general.container, Styles.container]}>
        <View style={Styles.containerLogo}>
          <Image source={HeaderLogo} style={Styles.logo} />
        </View>
        <View style={Styles.containerIllustration}>
          <Image source={illustration} style={Styles.illustration} />
        </View>
        <View style={[Styles.containerText, {marginBottom: marginBottomText}]}>
          <Text style={Styles.text}>{text}</Text>
        </View>
        {enableContinuar && showButton()}
      </View>
    </>
  )
}

export default OnboardingView