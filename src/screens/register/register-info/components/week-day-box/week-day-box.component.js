import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { ApIcon, ApCheckBox } from 'app-components'
import { getPeriodText } from 'app-utils'

import Styles from './week-day-box.style'

export const WeekDayBox = ({ day, periods, selectPeriod }) => {
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

  const select = (value, selected) => {
    selectPeriod(value, selected, day)
  }

  return (
    <Animated.View style={[Styles.wrapper, { height: heightValue }]}>
      <View style={Styles.container}>
        <View>
          <Text style={Styles.day}>{day}</Text>
          <Text style={Styles.periods}>{getPeriodText(periods)}</Text>
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
          label="manhã"
          value="morning"
          selected={periods.morning}
          onPress={select}
        />
        <ApCheckBox
          label="tarde"
          value="afternoon"
          selected={periods.afternoon}
          onPress={select}
        />
        <ApCheckBox
          label="noite"
          value="night"
          selected={periods.night}
          onPress={select}
        />
      </Animated.View>
    </Animated.View>
  )
}
