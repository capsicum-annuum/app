import React, { useEffect, useCallback } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ApIcon } from 'app-components'
import { Role } from 'app-constants'
import * as ImagePicker from 'expo-image-picker'
import { useToaster } from 'app-context'
import { strings } from 'app-locales'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'
import Constants from 'expo-constants'

import Styles from './photo-step.style'

import defaultUserPhoto from '../../../../../assets/images/user.png'
import defaultBackgroundPhoto from '../../../../../assets/images/organization-cover.png'

export const PhotoStep = () => {
  const { profilePhoto, backgroundPhoto, role } = useSelector(
    (state) => state.RegisterReducer,
  )

  const isOrganization = Role.ORGANIZATION === role

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

  const pickPhoto = async (aspect) => {
    return ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect,
    })
  }

  const pickBackgroundPhoto = async () => {
    const aspect = [16, 10]

    const photoResult = await pickPhoto(aspect)

    if (!photoResult.cancelled) {
      dispatch(RegisterActions.updateUserData({ backgroundPhoto: photoResult }))
    }
  }

  const pickProfilePhoto = async () => {
    const aspect = [4, 3]

    const photoResult = await pickPhoto(aspect)

    if (!photoResult.cancelled) {
      dispatch(RegisterActions.updateUserData({ profilePhoto: photoResult }))
    }
  }

  const displayProfilePhoto = profilePhoto
    ? { uri: profilePhoto.uri }
    : defaultUserPhoto
  const displayBackgroundPhoto = backgroundPhoto
    ? { uri: backgroundPhoto.uri }
    : defaultBackgroundPhoto

  const SelectButton = ({ onPress, style }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[Styles.buttonContainer, style]}
      >
        <ApIcon name="image" style={Styles.icon} />
        <Text style={Styles.text}>{strings('register.select')}</Text>
      </TouchableOpacity>
    )
  }

  const BackgroundPhoto = useCallback(() => {
    return (
      <View style={Styles.backgroundContainer}>
        <Image source={displayBackgroundPhoto} style={Styles.background} />
        <SelectButton
          onPress={pickBackgroundPhoto}
          style={Styles.backgroundButton}
        />
      </View>
    )
  }, [role])

  const ProfilePhoto = () => {
    const profileContainerStyle = isOrganization
      ? Styles.organizationProfileContainer
      : Styles.voluntaryProfileContainer

    const profilePhotoStyle = isOrganization
      ? Styles.organizationProfilePhoto
      : Styles.voluntaryProfilePhoto

    return (
      <View style={profileContainerStyle}>
        <Image source={displayProfilePhoto} style={profilePhotoStyle} />
        <SelectButton onPress={pickProfilePhoto} style={Styles.profileButton} />
      </View>
    )
  }

  const containerStyle = isOrganization
    ? Styles.organizationContainer
    : Styles.voluntaryContainer

  return (
    <View style={containerStyle}>
      {isOrganization && <BackgroundPhoto />}
      <ProfilePhoto />
    </View>
  )
}
