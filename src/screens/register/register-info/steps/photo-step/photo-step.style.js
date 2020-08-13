import { StyleSheet, Dimensions } from 'react-native'
import { colors } from 'app-theme'

const windowWidth = Dimensions.get('window').width

const profileContainer = {
  borderWidth: 1,
  borderColor: colors.color2,
  backgroundColor: colors.color1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
}

const container = {
  flex: 1,
  alignItems: 'center',
}

const styles = StyleSheet.create({
  voluntaryContainer: {
    ...container,
    justifyContent: 'center',
  },
  organizationContainer: {
    ...container,
  },
  backgroundContainer: {
    margin: 8,
  },
  background: {
    width: windowWidth - 16,
    height: 215,
  },
  organizationProfileContainer: {
    ...profileContainer,
    width: 185,
    height: 185,
    borderRadius: 180,
    top: 120,
  },
  voluntaryProfileContainer: {
    ...profileContainer,
    width: 255,
    height: 255,
    borderRadius: 255,
  },
  buttonContainer: {
    position: 'absolute',
    width: 120,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.color1,
    borderRadius: 50,
    borderColor: colors.color8,
    borderWidth: 1,
  },
  backgroundButton: {
    top: 12,
    left: 12,
  },
  profileButton: {
    bottom: 0,
  },
  organizationProfilePhoto: {
    width: 180,
    height: 180,
    borderRadius: 180,
  },
  voluntaryProfilePhoto: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  icon: {
    color: colors.color8,
    fontSize: 16,
    marginRight: 7,
  },
  text: {
    fontSize: 14,
    color: colors.color8,
  },
})

export default styles
