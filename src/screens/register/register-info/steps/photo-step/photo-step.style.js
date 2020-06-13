import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 290,
    height: 290,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 18,
    width: 120,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#428189',
    borderWidth: 1,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  icon: {
    color: '#428189',
    fontSize: 16,
    marginRight: 7,
  },
  text: {
    fontSize: 14,
    color: '#428189',
  },
})

export default styles
