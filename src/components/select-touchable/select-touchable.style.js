import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const text = {
  fontSize: 14,
  lineHeight: 19,
}

const touchable = {
  height: 30,
  marginBottom: 10,
  marginRight: 10,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
}

const styles = StyleSheet.create({
  touchableSelected: {
    ...touchable,
    backgroundColor: colors.color11,
  },
  touchableUnselected: {
    ...touchable,
    backgroundColor: colors.color2,
  },
  selectedText: {
    ...text,
    color: colors.color1,
  },
  unselectedText: {
    ...text,
    color: colors.color10,
  },
})

export default styles
