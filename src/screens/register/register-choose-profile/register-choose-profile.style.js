import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 80,
  },
  headerText: {
    fontSize: 20,
    lineHeight: 27,
    color: '#FFF',
    marginBottom: 17,
  },
  chooseProfileImage: {
    position: 'absolute',
    bottom: 0,
    left: -40,
    width: 146,
    height: 204,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 16,
    right: -10,
  },
  whichProfileText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#B9E8E6',
  },
  clickHereText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
})

export default styles
