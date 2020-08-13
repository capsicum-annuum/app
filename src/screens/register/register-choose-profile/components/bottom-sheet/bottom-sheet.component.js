import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ApIcon } from 'app-components'
import Modal from 'react-native-modal'

import Styles from './bottom-sheet.style'

const VOLUNTARY_TEXT =
  'Se você busca ajudar entidades ou famílias carentes, participar de campanhas, realizar trabalhos sociais das mais variadas causas, ou se identifica com tudo isso, sugerimos que se cadastre como um voluntário.'
const ORGANIZATION_TEXT =
  'Caso você esteja representando uma organização, grupo de voluntariado ou associação, e deseja encontrar pessoas que apoiem suas causas, continue com o cadastro de organização.'

export const BottomSheet = ({ closeCallback, isVisible }) => {
  return (
    <Modal
      style={Styles.wrapper}
      isVisible={isVisible}
      onBackButtonPress={closeCallback}
      onBackdropPress={closeCallback}
      onRequestClose={closeCallback}
    >
      <View style={Styles.container}>
        <TouchableOpacity
          onPress={closeCallback}
          style={Styles.touchableCloseIcon}
        >
          <ApIcon name="close" style={Styles.closeIcon} />
        </TouchableOpacity>
        <View style={Styles.content}>
          <ApIcon name="voluntary" style={Styles.voluntaryIcon} />
          <Text style={Styles.text}>{VOLUNTARY_TEXT}</Text>
        </View>
        <View style={Styles.content}>
          <ApIcon name="organization" style={Styles.voluntaryIcon} />
          <Text style={Styles.text}>{ORGANIZATION_TEXT}</Text>
        </View>
      </View>
    </Modal>
  )
}
