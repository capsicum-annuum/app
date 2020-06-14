import React from 'react'
import { View } from 'react-native'
import { ApTextArea } from 'app-components'
import { strings } from 'app-locales'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'

import Styles from './description-step.style'

export const DescriptionStep = () => {
  const { description } = useSelector((state) => state.RegisterReducer)

  const dispatch = useDispatch()

  const handleChange = (value) => {
    dispatch(RegisterActions.updateUserData({ description: value }))
  }

  return (
    <View style={Styles.container}>
      <ApTextArea
        type="secondary"
        optional
        onChangeText={handleChange}
        value={description}
        placeholder={strings('register.write_about_you')}
      />
    </View>
  )
}
