import { StyleSheet } from 'react-native'
import { colors } from 'app-theme'

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    width: '100%',
    position: 'relative',
  },
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.color2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    zIndex: 2,
  },
  day: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.color10,
  },
  periods: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.gray1,
  },
  touchable: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    fontSize: 20,
    color: colors.color8,
  },
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 55,
    flexDirection: 'row',
    borderWidth: 1,
    zIndex: 0,
    borderColor: colors.color8,
  },
})

export default styles
