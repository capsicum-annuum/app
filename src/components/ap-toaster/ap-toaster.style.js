import { StyleSheet, Dimensions } from 'react-native'

const totalHorizontalMargin = 10
const windowWidth = Dimensions.get('window').width - totalHorizontalMargin

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: 70,
    margin: 5,
    paddingHorizontal: 20,
    borderRadius: 3,
    zIndex: 90,
    right: 0,
    left: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    fontSize: 22.5,
    color: '#FFFFFF',
    marginRight: 8,
  },
  closeIcon: {
    position: 'absolute',
    fontSize: 16,
    padding: 18,
    top: -6,
    right: -26,
    color: '#FFFFFF',
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
    paddingRight: 25,
  },
})

export default styles
