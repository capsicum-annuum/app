import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'space-around',
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
    height: 63.5,
    width: 180,
  },
  forgotPasswordText: {
    fontSize: 14,
    lineHeight: 19,
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
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  or: {
    paddingHorizontal: 15,
    color: '#73D0CB',
    fontSize: 14,
    lineHeight: 19,
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
  },
  registerTextStart: {
    paddingTop: 5,
    fontSize: 16,
    lineHeight: 22,
    color: '#B9E8E6',
  },
  registerTextEnd: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
  },
})

export default styles
