import React, { useEffect } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { ApCheckBox } from 'app-components'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'

import Styles from './causes-step.style'

export const CausesStep = () => {
  const { causes, causesList, causesLoader } = useSelector(
    (state) => state.RegisterReducer,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (causesList.length === 0) {
      dispatch(RegisterActions.fetchCausesRequest())
    }
  }, [])

  const selectCause = (cause, selected) => {
    const causesSelected = [...causes]

    const newCauses = selected
      ? causesSelected.filter((c) => c !== cause)
      : causesSelected.concat(cause)

    dispatch(RegisterActions.updateUserData({ causes: newCauses }))
  }

  const CausesItems = () => {
    return (
      <>
        {causesList.map((cause) => {
          const selected = causes.includes(cause)

          return (
            <ApCheckBox
              value={cause}
              key={cause.description}
              label={cause.description}
              onPress={selectCause}
              selected={selected}
            />
          )
        })}
      </>
    )
  }

  const Loader = () => {
    return (
      <View style={Styles.loaderContainer}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  if (causesLoader) {
    return <Loader />
  }

  return (
    <ScrollView style={Styles.container}>
      <CausesItems />
      <View style={Styles.bottomArea} />
    </ScrollView>
  )
}
