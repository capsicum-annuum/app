import React, { useCallback, useEffect, useRef } from 'react'
import {
  Animated,
  Easing,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native'

import { ApIcon } from 'app-components'

import Styles from './ap-toaster.style'

const ApToasterPosition = {
  BOTTOM: 0,
  TOP: 1,
}

const DEFAULT_DURATION = 1800
const DEFAULT_OFFSET = 40
const DEFAULT_POSITION = ApToasterPosition.TOP
const DEFAULT_BACKGROUND_COLOR = '#E24F4F'
const DEFAULT_APPEAR_CALLBACK = () => {}
const DEFAULT_DISAPPEAR_CALLBACK = () => {}

const defaultOptions = {
  duration: DEFAULT_DURATION,
  offset: DEFAULT_OFFSET,
  position: DEFAULT_POSITION,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  appearCallback: DEFAULT_APPEAR_CALLBACK,
  disappearCallback: DEFAULT_DISAPPEAR_CALLBACK,
}

// TODO Adicionar outros icones e lógica para Toaster de successo e neutro

export const ApToaster = ({ content, options, dequeue }) => {
  const extendedOptions = {
    ...defaultOptions,
    ...options,
  }

  const {
    duration,
    offset,
    position,
    onPressContent,
    appearCallback,
    backgroundColor,
    disappearCallback,
  } = extendedOptions

  const initialY = 96 * (position === ApToasterPosition.BOTTOM ? 1 : -1)
  const finalY = offset * (position === ApToasterPosition.BOTTOM ? -1 : 1)

  const translateY = useRef(new Animated.Value(initialY)).current
  const timer = useRef()

  const appear = useCallback(() => {
    Animated.timing(translateY, {
      duration: 300,
      easing: Easing.ease,
      toValue: finalY,
      useNativeDriver: true,
    }).start(() => {
      appearCallback()
    })
  }, [appearCallback])

  const disappear = useCallback(() => {
    Animated.timing(translateY, {
      duration: 300,
      easing: Easing.ease,
      toValue: initialY,
      useNativeDriver: true,
    }).start(() => {
      dequeue()
      disappearCallback()
    })
  }, [dequeue, disappearCallback])

  useEffect(() => {
    timer.current = duration > 0 ? setTimeout(disappear, duration) : null

    appear()

    return () => {
      clearTimeout(timer.current)
    }
  }, [dequeue, disappearCallback, appearCallback, duration])

  return (
    <Animated.View
      style={[
        Styles.wrapper,
        position === ApToasterPosition.BOTTOM ? { bottom: 0 } : { top: 0 },
        { transform: [{ translateY }], backgroundColor },
      ]}
    >
      <View style={Styles.container}>
        <TouchableWithoutFeedback
          onPressIn={() => {
            return clearTimeout(timer.current)
          }}
          onPressOut={disappear}
        >
          <ApIcon name="close" style={Styles.closeIcon} />
        </TouchableWithoutFeedback>
        <ApIcon name="alert-triangle" style={Styles.icon} />
        <TouchableWithoutFeedback onPress={onPressContent}>
          <Text style={Styles.content}>{content}</Text>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  )
}
