import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: 50,
    width: '100%'
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#3EB5C1',
    borderRadius: 50,
    height: '100%',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
})

export default styles
