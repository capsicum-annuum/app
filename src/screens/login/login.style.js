import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const headerHeight = windowWidth / 1.7

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  linearGradient: {
    flex: 1,
  },
  logo: {
    marginBottom: 10,
    height: headerHeight,
    width: windowWidth,
  },
  forgetPasswordText: {
    fontSize: 14,
    lineHeight: 19,
    marginTop: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  line: {
    backgroundColor: '#73D0CB',
    height: 1,
    width: 50,
  },
  orContainer: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  or: {
    paddingHorizontal: 15,
    color: '#73D0CB',
    fontSize: 14,
    lineHeight: 19,
  },
})

export default styles
