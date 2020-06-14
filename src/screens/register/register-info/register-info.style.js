import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    width: '100%',
    height: Constants.statusBarHeight + 75,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
})

export default styles
