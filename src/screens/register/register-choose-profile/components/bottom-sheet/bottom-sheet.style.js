import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  wrapper: {
    margin: 0,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  container: {
    width: windowWidth,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: 54,
    paddingBottom: 30,
    height: 344,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  content: {
    width: 150,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  touchableCloseIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 20,
  },
  closeIcon: {
    fontSize: 16,
    color: '#428189',
  },
  text: {
    fontSize: 14,
    lineHeight: 19,
  },
  voluntaryIcon: {
    marginBottom: 20,
    fontSize: 42,
  },
})

export default styles
