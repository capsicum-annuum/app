import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const defaultText = {
  fontSize: 16,
  lineHeight: 22,
}
const defaultButton = {
  borderRadius: 50,
  width: '100%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
}
const shadowStyle = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
}
const defaultIcon = {
  position: 'absolute',
  zIndex: 1,
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
})

const small = StyleSheet.create({
  button: {
    ...defaultButton,
    height: 30,
  },
  text: {
    ...defaultText,
    fontSize: 14,
    lineHeight: 19,
  },
  icon: {
    ...defaultIcon,
    left: 14,
    top: 7,
    fontSize: 16,
  },
})

const large = StyleSheet.create({
  button: {
    ...defaultButton,
    height: 45,
  },
  text: {
    ...defaultText,
    fontSize: 16,
    lineHeight: 22,
  },
  icon: {
    ...defaultIcon,
    left: 23,
    top: 12,
    fontSize: 20,
  },
})

const defaultStyle = StyleSheet.create({
  text: {
    color: colors.color1,
  },
  button: {
    ...shadowStyle,
    backgroundColor: colors.color6,
  },
  disabledText: {
    color: colors.gray4,
  },
  disabledButton: {
    backgroundColor: colors.color10,
  },
  icon: {
    color: colors.color1,
  },
  disabledIcon: {
    color: colors.gray4,
  },
})

const primary = StyleSheet.create({
  text: {
    color: colors.color8,
  },
  button: {
    ...shadowStyle,
    backgroundColor: colors.color1,
    borderColor: colors.color8,
    borderWidth: 1,
  },
  disabledText: {
    color: colors.color8,
  },
  disabledButton: {
    backgroundColor: colors.gray5,
    borderColor: colors.color8,
    borderWidth: 1,
  },
  icon: {
    color: colors.color8,
  },
  disabledIcon: {
    color: colors.color8,
  },
})

const secondary = StyleSheet.create({
  text: {
    ...shadowStyle,
    color: colors.color10,
  },
  button: {
    backgroundColor: colors.color1,
  },
  disabledText: {
    color: colors.color10,
  },
  disabledButton: {
    backgroundColor: colors.gray5,
  },
  icon: {
    color: colors.color10,
  },
  disabledIcon: {
    color: colors.color10,
  },
})

export default { large, small, styles, defaultStyle, primary, secondary }
