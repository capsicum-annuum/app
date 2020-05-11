import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ApIcon } from 'app-components'

import Styles from './ap-check-box.style'

export const ApCheckBox = ({ selected, label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(label, selected)}
      style={Styles.container}
    >
      <View style={[Styles.box, selected && Styles.selectedBox]}>
        {selected && <ApIcon style={Styles.icon} name="check" />}
      </View>
      <Text style={Styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
