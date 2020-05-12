import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { strings } from 'app-locales'
import { WeekDayBox } from '../../components'

import Styles from './availability-step.style'

const initialDate = [
  {
    day: strings('weekdays.monday'),
    periods: { morning: false, afternoon: false, night: false },
  },
  {
    day: strings('weekdays.tuesday'),
    periods: { morning: false, afternoon: false, night: false },
  },
  {
    day: strings('weekdays.wednesday'),
    periods: { morning: false, afternoon: false, night: false },
  },
  {
    day: strings('weekdays.thursday'),
    periods: { morning: false, afternoon: false, night: false },
  },
  {
    day: strings('weekdays.friday'),
    periods: { morning: false, afternoon: false, night: false },
  },
  {
    day: strings('weekdays.saturday'),
    periods: { morning: false, afternoon: false, night: false },
  },
  {
    day: strings('weekdays.sunday'),
    periods: { morning: false, afternoon: false, night: false },
  },
]

export const AvailabilityStep = () => {
  const [data, setData] = useState(initialDate)

  const selectPeriod = (period, selected, day) => {
    const dataList = [...data]

    const newDataList = dataList.map((item) => {
      if (item.day === day) {
        item.periods[period] = !selected
      }

      return item
    })

    setData(newDataList)
  }

  return (
    <ScrollView style={Styles.container}>
      {data.map(({ day, periods }) => (
        <WeekDayBox day={day} selectPeriod={selectPeriod} periods={periods} />
      ))}
      <View style={Styles.bottomArea} />
    </ScrollView>
  )
}
