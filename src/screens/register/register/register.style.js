import { StyleSheet, Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height

const headerHeight = screenHeight > 670 ? 180 : 160

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 40,
    position: 'relative',
  },
  headerContainer: {
    width: '100%',
    minHeight: headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    lineHeight: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
  },
  hasAccountText: {
    color: '#B9E8E6',
    fontSize: 16,
    lineHeight: 22,
  },
  accessHereText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  hasAccountContainer: {
    position: 'absolute',
    bottom: 25,
  },
})

export default styles
