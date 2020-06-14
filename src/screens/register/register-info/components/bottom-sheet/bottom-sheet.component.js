import React from 'react'
import { View } from 'react-native'
import { ApButton } from 'app-components'

import Styles from './bottom-sheet.style'

export const BottomSheet = ({ label, disabled, onPress }) => {
  return (
    <View style={Styles.container}>
      <ApButton label={label} onPress={onPress} disabled={disabled} />
    </View>
  )
}
