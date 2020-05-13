import React, { useState } from 'react'
import { ApTextInput } from '../ap-text-input/ap-text-input.component'

export const ApPasswordInput = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const iconName = secureTextEntry ? 'eye' : 'eye-hide'

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  return (
    <ApTextInput
      {...props}
      iconName={iconName}
      secureTextEntry={secureTextEntry}
      iconCallback={toggleSecureTextEntry}
    />
  )
}
