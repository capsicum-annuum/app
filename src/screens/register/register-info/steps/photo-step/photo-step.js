import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ApIcon } from 'app-components'
import * as ImagePicker from 'expo-image-picker'
import { useToaster } from 'app-context'
import { strings } from 'app-locales'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'
import Constants from 'expo-constants'

import Styles from './photo-step.style'

const defaultUserPhoto = require('../../../../../assets/images/user.png')

export const PhotoStep = () => {
  const { photo } = useSelector((state) => state.RegisterReducer)

  const { queue } = useToaster()
  const dispatch = useDispatch()

  const requestCameraRollPermissions = async () => {
    if (Constants.platform.ios) {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
      if (status !== 'granted') {
        queue(strings('register.access_gallery_denied'))
      }
    }
  }

  useEffect(() => {
    requestCameraRollPermissions()
  }, [])

  const pickPhoto = async () => {
    const photoResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!photoResult.cancelled) {
      dispatch(RegisterActions.updateUserData({ photo: photoResult.uri }))
    }
  }

  const displayPhoto = photo ? { uri: photo } : defaultUserPhoto

  return (
    <View style={Styles.container}>
      <Image source={displayPhoto} style={Styles.image} />
      <TouchableOpacity onPress={pickPhoto} style={Styles.buttonContainer}>
        <ApIcon name="image" style={Styles.icon} />
        <Text style={Styles.text}>Selecionar</Text>
      </TouchableOpacity>
    </View>
  )
}
