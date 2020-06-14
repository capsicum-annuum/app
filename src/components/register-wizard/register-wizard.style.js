import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const defauttDot = {
  margin: 5,
  width: 12,
  height: 12,
  borderRadius: 12,
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160 + Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFF',
    textAlign: 'center',
  },
  content: {
    fontSize: 14,
    lineHeight: 19,
    color: '#FFF',
    textAlign: 'center',
  },
  index: {
    flexDirection: 'row',
    marginTop: 22,
  },
  dot: {
    ...defauttDot,
    backgroundColor: '#BAD9E0',
  },
  selectedDot: {
    ...defauttDot,
    backgroundColor: '#67F6A5',
  },
})

export default styles
