import React from 'react'
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native'
import Modal from 'react-native-modal'
import { ApIcon } from 'app-components'
import { BottomSheet } from '..'

import Styles from './list-location-modal.style'

export const ListLocationModal = ({
  isVisible,
  data,
  selectedItem = 'Rio Grande do Sul',
  selectedCallback = () => {},
  closeCallback,
}) => {
  const label = selectedItem ? 'Confimar' : 'Pular'

  const Header = () => {
    return (
      <View style={Styles.headerContainer}>
        <Text style={Styles.headerText}>Escolha o estado</Text>
      </View>
    )
  }

  const Item = (props) => {
    const { name } = props
    const isSelected = selectedItem === name

    return (
      <View style={Styles.itemContainer}>
        <TouchableOpacity
          onPress={() => selectedCallback(props)}
          style={Styles.itemTouchable}
        >
          <Text style={[Styles.itemText, isSelected && Styles.bold]}>
            {name}
          </Text>
          {isSelected && <ApIcon style={Styles.itemIcon} name="check" />}
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Modal
      style={Styles.wrapper}
      onBackButtonPress={closeCallback}
      onBackdropPress={closeCallback}
      onRequestClose={closeCallback}
      isVisible={isVisible}
    >
      <View style={Styles.container}>
        <Header />
        <ScrollView style={Styles.scrollView}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
        <BottomSheet
          label={label}
          onPress={closeCallback}
          disabled={!selectedItem}
        />
      </View>
    </Modal>
  )
}
