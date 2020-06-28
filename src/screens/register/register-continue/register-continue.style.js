import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  volunteerImage: {
    position: 'absolute',
    height: 156,
    width: 220,
    bottom: 0,
    right: -40,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 27,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
  },
})

export default styles
