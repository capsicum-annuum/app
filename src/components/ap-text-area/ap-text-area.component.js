import React from 'react'
import { ApTextInput } from 'app-components'

import Styles from './ap-text-area.style'

export const ApTextArea = (props) => {
  return (
    <ApTextInput
      multiline
      containerStyle={Styles.container}
      inputStyle={Styles.input}
      textAlignVertical="top"
      {...props}
    />
  )
}
