import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.color1,
    marginTop: 30,
  },
  leftImage: {
    position: 'absolute',
    bottom: 40,
    left: 0,
  },
  rightImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  icon: {
    fontSize: 48,
    color: colors.color1,
  },
})

export default styles
