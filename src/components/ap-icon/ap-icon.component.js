import React from 'react'
import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconConfig from '../../assets/fonts/selection.json'

const expoAssetId = require('../../assets/fonts/HandsOn.ttf')

const Icon = createIconSetFromIcoMoon(iconConfig, 'HandsOn', expoAssetId)

export const ApIcon = (props) => {
  return <Icon {...props} />
}
