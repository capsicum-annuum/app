import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { ApIcon, ApCheckBox } from 'app-components'
import { getDayShiftText } from 'app-utils'
import { Availability } from 'app-constants'
import { strings } from 'app-locales'

import Styles from './week-day-box.style'

export const WeekDayBox = ({
  label,
  dayOfWeekValue,
  selectDayShift,
  selectedAvailabilities,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [heightValue] = useState(new Animated.Value(60))
  const [rotateValue] = useState(new Animated.Value(0))
  const [positionValue] = useState(new Animated.Value(0))

  function open() {
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 300,
    }).start()

    Animated.timing(positionValue, {
      toValue: 60,
      duration: 300,
    }).start()

    Animated.timing(heightValue, {
      toValue: 115,
      duration: 300,
    }).start(() => {
      setIsOpen(true)
    })
  }

  function close() {
    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 300,
    }).start()

    Animated.timing(positionValue, {
      toValue: 0,
      duration: 300,
    }).start()

    Animated.timing(heightValue, {
      toValue: 60,
      duration: 300,
    }).start(() => {
      setIsOpen(false)
    })
  }

  const interpolateRotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })

  const animatedStyle = {
    transform: [{ rotate: interpolateRotation }],
  }

  const select = (dayShiftValue, selected) => {
    selectDayShift(dayOfWeekValue, dayShiftValue, selected)
  }

  const checkSelected = (dayShift) => {
    return selectedAvailabilities.find((a) => a.dayShift === dayShift)
  }

  return (
    <Animated.View style={[Styles.wrapper, { height: heightValue }]}>
      <View style={Styles.container}>
        <View>
          <Text style={Styles.day}>{label}</Text>
          <Text style={Styles.periods}>
            {getDayShiftText(selectedAvailabilities)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={isOpen ? close : open}
          style={Styles.touchable}
        >
          <Animated.View style={animatedStyle}>
            <ApIcon name="arrow" style={Styles.icon} />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Animated.View style={[Styles.bottomContainer, { top: positionValue }]}>
        <ApCheckBox
          label={strings('register.morning')}
          value={Availability.DAY_SHIFT.MORNING}
          selected={checkSelected(Availability.DAY_SHIFT.MORNING)}
          onPress={select}
        />
        <ApCheckBox
          label={strings('register.afternoon')}
          value={Availability.DAY_SHIFT.AFTERNOON}
          selected={checkSelected(Availability.DAY_SHIFT.AFTERNOON)}
          onPress={select}
        />
        <ApCheckBox
          label={strings('register.night')}
          value={Availability.DAY_SHIFT.NIGHT}
          selected={checkSelected(Availability.DAY_SHIFT.NIGHT)}
          onPress={select}
        />
      </Animated.View>
    </Animated.View>
  )
}
