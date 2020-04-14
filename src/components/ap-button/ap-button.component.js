import React, { useState, useCallback } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import { ApIcon } from '../ap-icon/ap-icon.component'

import Styles from './ap-button.styles'

export const ApButton = (props) => {
  const [enable, setEnable] = useState(true)
  const whenButtonPress = () => setEnable(!enable)

  const Loader = useCallback(() => {
    const iconName = enable ? 'eye' : 'eye-hide'

    return <ApIcon name={iconName} style={Styles.icon} />
  }, [enable])

  return (
    <TouchableOpacity
      style={[Styles.touchable]}
      onPress={whenButtonPress}
    >
      {/* <Text style={Styles.icon}>Texto aqui</Text> */}
      <Loader />
    </TouchableOpacity>
  )
}
