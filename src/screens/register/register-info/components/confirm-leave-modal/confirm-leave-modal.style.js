import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const styles = StyleSheet.create({
  wrapper: {
    margin: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 250,
    width: '90%',
    backgroundColor: colors.color1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    marginTop: 26,
    marginBottom: 21,
    fontSize: 18,
    color: colors.gray2,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 19,
    marginBottom: 27,
    color: colors.gray2,
  },
  buttonContainer: {
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.color6,
    fontWeight: 'bold',
  },
})

export default styles
