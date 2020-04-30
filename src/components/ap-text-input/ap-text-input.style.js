import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 45,
    width: '100%',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#FFF',
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 22,
    color: '#FFF',
  },
  bold: {
    fontWeight: 'bold',
  },
  optionalText: {
    position: 'absolute',
    fontSize: 12,
    lineHeight: 16,
    fontStyle: 'italic',
    color: '#B9E8E6',
  },
  optionalLeft: {
    position: 'absolute',
    right: 52,
    top: 14,
  },
  optionalRight: {
    position: 'absolute',
    right: 20,
    top: 14,
  },
  aditional: {
    position: 'absolute',
    right: 20,
    top: 12,
  },
  icon: {
    color: '#FFF',
    fontSize: 25,
  },
  alert: {
    position: 'absolute',
    right: -30,
    top: 12,
    backgroundColor: '#E24F4F',
    borderRadius: 20,
  },
  alertIcon: {
    color: '#FFF',
    fontSize: 24,
  }
})

export default styles
