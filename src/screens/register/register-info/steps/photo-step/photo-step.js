import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ApIcon } from 'app-components'

import Styles from './photo-step.style'

const defaultUserImage = require('../../../../../assets/images/user.png')

export const PhotoStep = () => {
  return (
    <View style={Styles.container}>
      <Image source={defaultUserImage} style={Styles.image} />
      <TouchableOpacity style={Styles.buttonContainer}>
        <ApIcon name="image" style={Styles.icon} />
        <Text style={Styles.text}>Selecionar</Text>
      </TouchableOpacity>
    </View>
  )
}
