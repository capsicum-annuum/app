import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { colors } from 'app-theme'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Constants.statusBarHeight + 75,
    backgroundColor: colors.color1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    opacity: 1.2,
  },
})

export default styles
