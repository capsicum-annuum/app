import { useEffect, useRef } from 'react'
import { BackHandler } from 'react-native'

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const useBackButton = handler => {
  const HARDWARE_BACK_PRESS = 'hardwareBackPress'

  useEffect(() => {
    BackHandler.addEventListener(HARDWARE_BACK_PRESS, handler)

    return () => {
      BackHandler.removeEventListener(HARDWARE_BACK_PRESS, handler)
    }
  }, [handler])
}

export const Hooks = { usePrevious, useBackButton }
