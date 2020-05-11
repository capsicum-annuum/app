import React from 'react'
import { View } from 'react-native'
import { ApTextArea } from 'app-components'
import { strings } from 'app-locales'

import Styles from './description-step.style'

export const DescriptionStep = () => {
  return (
    <View style={Styles.container}>
      <ApTextArea
        colorType="secondary"
        placeholder={strings('register.write_about_you')}
      />
    </View>
  )
}
