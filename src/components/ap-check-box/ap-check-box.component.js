import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ApIcon } from 'app-components'

import Styles from './ap-check-box.style'

export const ApCheckBox = ({ selected, label, onPress, style, value }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(value, selected)}
      style={[Styles.container, style]}
    >
      <View style={[Styles.box, selected && Styles.selectedBox]}>
        {selected && <ApIcon style={Styles.icon} name="check" />}
      </View>
      <Text style={Styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
