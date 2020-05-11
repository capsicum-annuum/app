import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  icon: {
    fontSize: 13,
    color: colors.color1,
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.color8,
  },
  selectedBox: {
    backgroundColor: colors.color8,
  },
  label: {
    margin: 8,
    fontSize: 14,
    lineHeight: 19,
    color: colors.gray2,
  },
})

export default styles
