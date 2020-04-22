import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { ApButton } from 'app-components'
import { LinearGradient } from 'expo-linear-gradient'

import { LoginForm, RegisterText } from './components'

import Styles from './login.style'

import HeaderLogo from '../../assets/images/header-logo.png'

export const LoginScreen = () => {
  return (
    <LinearGradient
      colors={['#15CA9E', '#4AAECB']}
      style={Styles.linearGradient}
    >
      <SafeAreaView />
      <View style={Styles.container}>
        <Image source={HeaderLogo} style={Styles.logo} />
        <LoginForm />
        <TouchableOpacity>
          <Text style={Styles.forgetPasswordText}>Esqueci a senha</Text>
        </TouchableOpacity>
        <View style={Styles.orContainer}>
          <View style={Styles.line} />
          <Text style={Styles.or}>OU</Text>
          <View style={Styles.line} />
        </View>
        <ApButton
          text="Facebook"
          style={Styles.facebookButton}
          secondaryColor="#FFF"
          primaryColor="#2B727A"
        />
        <RegisterText />
      </View>
    </LinearGradient>
  )
}
