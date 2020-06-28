import { Dimensions, StyleSheet } from 'react-native'
import { colors, fonts } from 'app-theme'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  containerLogo: {
    flex: 1,
    width: windowWidth,
    alignItems: 'center',
    paddingTop: 50
  },
  logo: {
    height: 63.5,
    width: 180,
  },
  containerIllustration: {
    flex: 2,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  illustration: {
    width: windowWidth -40,
    height: 200,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  containerText: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: colors.color1,
    fontSize: fonts.onboarding,
    fontWeight: '300',
    textAlign: 'center'
  }
})

export default styles
