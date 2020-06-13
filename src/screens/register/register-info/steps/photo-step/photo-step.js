import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ApIcon } from 'app-components'
import * as ImagePicker from 'expo-image-picker'
import { useToaster } from 'app-context'
import { strings } from 'app-locales'
import Constants from 'expo-constants'

import Styles from './photo-step.style'

const defaultUserPhoto = require('../../../../../assets/images/user.png')

export const PhotoStep = () => {
  const [photo, setPhoto] = useState(defaultUserPhoto)

  const { queue } = useToaster()

  const requestCameraRollPermissions = async () => {
    if (Constants.platform.ios) {
      const {
        permissionStatus,
      } = await ImagePicker.requestCameraRollPermissionsAsync()
      if (permissionStatus !== 'granted') {
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
      setPhoto({ uri: photoResult.uri })
    }
  }

  return (
    <View style={Styles.container}>
      <Image source={photo} style={Styles.image} />
      <TouchableOpacity onPress={pickPhoto} style={Styles.buttonContainer}>
        <ApIcon name="image" style={Styles.icon} />
        <Text style={Styles.text}>Selecionar</Text>
      </TouchableOpacity>
    </View>
  )
}
