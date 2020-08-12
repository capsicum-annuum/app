import React from 'react'
import { View } from 'react-native'
import { strings } from 'app-locales'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'
import { ApTextInput, ApTextInputTypes } from 'app-components'

import Styles from './contact-step.style'

const ContactType = {
  WEBSITE: 'website',
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
  TWITTER: 'twitter',
}

export const ContactStep = () => {
  const { contact } = useSelector((state) => state.RegisterReducer)

  const dispatch = useDispatch()

  const updateContact = (value, type) => {
    dispatch(
      RegisterActions.updateUserData({
        contact: { ...contact, [type]: value },
      }),
    )
  }

  return (
    <View style={Styles.container}>
      <ApTextInput
        type={ApTextInputTypes.SECONDARY}
        onChangeText={(value) => updateContact(value, ContactType.WEBSITE)}
        value={contact.website}
        iconName="globe"
        placeholder={strings('register.website')}
      />
      <ApTextInput
        type={ApTextInputTypes.SECONDARY}
        onChangeText={(value) => updateContact(value, ContactType.FACEBOOK)}
        value={contact.facebook}
        iconName="facebook"
        placeholder={strings('register.facebook')}
      />
      <ApTextInput
        type={ApTextInputTypes.SECONDARY}
        onChangeText={(value) => updateContact(value, ContactType.INSTAGRAM)}
        value={contact.instagram}
        iconName="instagram"
        placeholder={strings('register.instagram')}
      />
      <ApTextInput
        type={ApTextInputTypes.SECONDARY}
        onChangeText={(value) => updateContact(value, ContactType.TWITTER)}
        value={contact.twitter}
        iconName="twitter"
        placeholder={strings('register.twitter')}
      />
    </View>
  )
}
