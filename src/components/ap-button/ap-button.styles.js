import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%'
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: colors.color6,
    borderRadius: 50,
    height: '100%',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: colors.color1,
    fontSize: 18,
  },
})

export default styles
