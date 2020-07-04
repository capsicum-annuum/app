const RootScreens = {
  AUTH_STACK: 'AuthStack',
  MAIN_STACK: 'MainStack',
}

const AuthScreens = {
  LOGIN_SCREEN: 'LoginScreen',
}

const MainScreens = {
  BOTTOM_TAB: 'BottomTab',
}

const BottomScreens = {
  HOME_STACK: 'HomeStack',
  PROFILE_STACK: 'ProfileStack',
}

const RegisterScreens = {
  REGISTER_SCREEN: 'RegisterScreen',
  REGISTER_CHOOSE_PROFILE_SCREEN: 'RegisterChooseProfileScreen',
  REGISTER_CONTINUE_SCREEN: 'RegisterContinueScreen',
  REGISTER_INFO_SCREEN: 'RegisterInfoScreen',
  REGISTER_FINISH_SCREEN: 'RegisterFinishScreen',
}

const HomeScreens = {
  HOME_SCREEN: 'HomeScreen',
}

const ProfileScreens = {
  PROFILE_SCREEN: 'ProfileScreen',
}

export const Screens = {
  ...RootScreens,
  ...AuthScreens,
  ...MainScreens,
  ...BottomScreens,
  ...HomeScreens,
  ...ProfileScreens,
  ...RegisterScreens,
}
