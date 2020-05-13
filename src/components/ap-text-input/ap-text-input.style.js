import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const defaultInput = {
  flex: 1,
  borderRadius: 50,
  borderWidth: 1,
  paddingLeft: 16,
  fontSize: 16,
}

const defaultOptional = {
  position: 'absolute',
  fontStyle: 'italic',
  fontSize: 12,
  top: 15,
}

const defaultAdditionalIcon = {
  fontSize: 18,
}

const defaultAlert = {
  position: 'absolute',
  right: -30,
  top: 12,
}

const defaultAlertIcon = {
  fontSize: 24,
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 45,
    marginBottom: 10,
  },
  optionalLeft: {
    right: 55,
  },
  bold: {
    fontWeight: 'bold',
  },
  gray: {
    color: colors.gray2,
  },
  optionalRight: {
    right: 19,
  },
  additional: {
    position: 'absolute',
    right: 19,
    bottom: 13,
  },
})

const primary = StyleSheet.create({
  input: {
    ...defaultInput,
    color: colors.color1,
    borderColor: colors.color1,
  },
  optionalText: {
    ...defaultOptional,
    color: colors.color3,
  },
  additionalIcon: {
    ...defaultAdditionalIcon,
    color: colors.color1,
  },
  disabledInput: {
    ...defaultInput,
    color: colors.color3,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(185, 232, 230, 0.5)',
  },
  disabledOptionalText: {
    ...defaultOptional,
    color: colors.color3,
  },
  disabledAdditionalIcon: {
    ...defaultAdditionalIcon,
    color: colors.color3,
  },
  alert: {
    ...defaultAlert,
    backgroundColor: colors.warning,
    borderRadius: 20,
  },
  alertIcon: {
    ...defaultAlertIcon,
    color: colors.color1,
  },
})

const secondary = StyleSheet.create({
  input: {
    ...defaultInput,
    color: colors.color8,
    borderColor: colors.color9,
  },
  optionalText: {
    ...defaultOptional,
    color: colors.gray1,
  },
  additionalIcon: {
    ...defaultAdditionalIcon,
    color: colors.color9,
  },
  disabledInput: {
    ...defaultInput,
    color: colors.gray1,
    borderColor: 'rgba(66, 129, 137, 0.5)',
    backgroundColor: 'rgba(166, 166, 166, 0.5)',
  },
  disabledOptionalText: {
    ...defaultOptional,
    color: colors.gray1,
  },
  disabledAdditionalIcon: {
    ...defaultAdditionalIcon,
    color: colors.color11,
  },
  alert: {
    ...defaultAlert,
  },
  alertIcon: {
    ...defaultAlertIcon,
    color: colors.warning,
  },
})

export default { styles, primary, secondary }
