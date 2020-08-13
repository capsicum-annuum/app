import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { colors } from 'app-theme'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  wrapper: {
    margin: 0,
    flex: 1,
  },
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.color1,
  },
  scrollView: {
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  headerContainer: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 25,
    color: colors.gray2,
  },
  itemContainer: {
    width: '100%',
    height: 48,
    borderTopColor: colors.color11,
    borderTopWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 9,
  },
  itemTouchable: {
    position: 'relative',
    width: '100%',
  },
  itemText: {
    color: colors.gray2,
    fontSize: 14,
    lineHeight: 19,
  },
  itemIcon: {
    position: 'absolute',
    right: 0,
    top: 1,
    fontSize: 13,
    color: colors.gray2,
  },
  bold: {
    fontWeight: 'bold',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

export default styles
