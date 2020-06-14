import React from 'react'
import { View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { availabilityData } from 'app-utils'
import { RegisterActions } from 'app-redux'
import { WeekDayBox } from '../../components'

import Styles from './availability-step.style'

export const AvailabilityStep = () => {
  const { availability } = useSelector((state) => state.RegisterReducer)

  const dispatch = useDispatch()

  const selectDayShift = (dayOfWeek, dayShift, selected) => {
    const newAvailabilityList = selected
      ? availability.filter(
          (a) => a.dayOfWeek !== dayOfWeek || a.dayShift !== dayShift,
        )
      : availability.concat({ dayOfWeek, dayShift })

    dispatch(
      RegisterActions.updateUserData({ availability: newAvailabilityList }),
    )
  }

  return (
    <ScrollView style={Styles.container}>
      {availabilityData.map(({ label, value }) => {
        const availabilityList = [...availability]
        const selectedAvailabilities = availabilityList.filter(
          (a) => a.dayOfWeek === value,
        )

        return (
          <WeekDayBox
            key={value}
            label={label}
            dayOfWeekValue={value}
            selectDayShift={selectDayShift}
            selectedAvailabilities={selectedAvailabilities}
          />
        )
      })}
      <View style={Styles.bottomArea} />
    </ScrollView>
  )
}
