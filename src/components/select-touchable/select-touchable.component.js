import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import Styles from './select-touchable.style'

export const SelectTouchable = ({ onPress, selected, title }) => {
  const touchableStyle = selected
    ? Styles.touchableSelected
    : Styles.touchableUnselected
  const textStyle = selected ? Styles.selectedText : Styles.unselectedText

  return (
    <TouchableOpacity
      onPress={() => onPress(title, selected)}
      style={touchableStyle}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}
