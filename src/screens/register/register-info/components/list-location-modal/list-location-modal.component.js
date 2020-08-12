import React, { useEffect, useState, useRef, useCallback } from 'react'
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import Modal from 'react-native-modal'
import { useSelector, useDispatch } from 'react-redux'
import { ApIcon } from 'app-components'
import { LocationType } from 'app-constants'
import { LocationActions, RegisterActions } from 'app-redux'
import { strings } from 'app-locales'
import { BottomSheet } from '..'

import Styles from './list-location-modal.style'

export const ListLocationModal = ({
  isVisible,
  closeCallback,
  locationType,
}) => {
  const [selectedState, setSelectedState] = useState({})
  const [selectedCity, setSelectedCity] = useState({})
  const { location } = useSelector((state) => state.RegisterReducer)
  const {
    citiesDataSuccess,
    statesDataSuccess,
    citiesLoader,
    statesLoader,
  } = useSelector((state) => state.LocationReducer)
  const flatListRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const {
      cityId,
      cityName,
      stateId,
      stateName,
      federatedUnityAcronym,
    } = location

    if (statesDataSuccess.length === 0 && isVisible) {
      dispatch(LocationActions.fetchStatesRequest())
    }

    if (LocationType.CITY === locationType) {
      setSelectedCity({ id: cityId, name: cityName })
    } else if (LocationType.STATE === locationType) {
      setSelectedState({
        id: stateId,
        name: stateName,
        acronym: federatedUnityAcronym,
      })
    }
  }, [isVisible])

  const isCity = useCallback(LocationType.CITY === locationType, [locationType])

  const showLoader = useCallback(citiesLoader || statesLoader, [
    citiesLoader,
    statesLoader,
  ])

  const data = isCity ? citiesDataSuccess : statesDataSuccess

  const onSelectItem = (item) => {
    if (isCity) {
      setSelectedCity(item)
    } else {
      setSelectedState(item)
    }
  }

  const getItemLayout = (data, index) => ({
    length: 50,
    offset: 50 * index,
    index,
  })

  const onConfirmSelectedState = () => {
    const { name, acronym, id } = selectedState
    const { stateId } = location

    if (stateId !== id) {
      dispatch(
        RegisterActions.updateUserData({
          location: {
            stateName: name,
            federatedUnityAcronym: acronym,
            stateId: id,
          },
        }),
      )

      dispatch(LocationActions.fetchCitiesRequest(id))
    }

    closeCallback()
  }

  const onConfirmSelectedCity = () => {
    const { name, id } = selectedCity
    const { cityId } = selectedCity

    if (cityId !== id) {
      dispatch(
        RegisterActions.updateUserData({
          location: {
            ...location,
            cityName: name,
            cityId: id,
          },
        }),
      )
    }

    closeCallback()
  }

  const Header = () => {
    return (
      <View style={Styles.headerContainer}>
        <Text style={Styles.headerText}>Escolha o estado</Text>
      </View>
    )
  }

  const Item = (props) => {
    const { name, id } = props

    const selectedItemId = isCity ? selectedCity.id : selectedState.id
    const isSelected = selectedItemId === id

    return (
      <View style={Styles.itemContainer}>
        <TouchableOpacity
          onPress={() => onSelectItem(props)}
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

  const Content = () => {
    const disabled = isCity ? !selectedCity.id : !selectedState.id

    return (
      <>
        <Header />
        <ScrollView style={Styles.scrollView}>
          <FlatList
            ref={flatListRef}
            getItemLayout={getItemLayout}
            data={data}
            initialNumToRender={2}
            refreshing={false}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
        <BottomSheet
          label={strings('register.confirm')}
          onPress={isCity ? onConfirmSelectedCity : onConfirmSelectedState}
          disabled={disabled}
        />
      </>
    )
  }

  const Loader = () => {
    return (
      <View style={Styles.loaderContainer}>
        <ActivityIndicator size="large" />
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
        {showLoader ? <Loader /> : <Content />}
      </View>
    </Modal>
  )
}
