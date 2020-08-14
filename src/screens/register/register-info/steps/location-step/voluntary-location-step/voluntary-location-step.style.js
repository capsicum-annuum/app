import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 40,
  },
  topContainer: {
    width: 175,
  },
  activeLocationButton: {
    paddingLeft: 20,
  },
  icon: {
    color: colors.color8,
    fontSize: 18,
    paddingRight: 8,
  },
  locationText: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.color8,
  },
  middleContainer: {
    flexDirection: 'row',
    paddingVertical: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    backgroundColor: colors.gray1,
    height: 1,
    width: 50,
  },
  orInformText: {
    marginHorizontal: 8,
    fontSize: 14,
    lineHeight: 19,
    color: colors.gray1,
  },
  bottomContainer: {
    width: '100%',
  },
  buttonMargin: {
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.color8,
  },
})

export default styles
