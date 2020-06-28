import React, { useState } from 'react'
import { View, Image } from 'react-native'
import Swiper from 'react-native-swiper'

import { LinearGradient } from 'expo-linear-gradient'
import { general, colors } from 'app-theme'
import { ApButton } from 'app-components'
import { strings } from 'app-locales'

import Icon from '../../assets/images/icon-default.png'
import Illustration1 from '../../assets/illustrations/illustration1.png'
import Illustration2 from '../../assets/illustrations/illustration2.png'
import Illustration3 from '../../assets/illustrations/illustration3.png'
import Illustration4 from '../../assets/illustrations/illustration4.png'

import OnboardingView from './components/onboardingView.component'

export const OnboardingScreen = () => {
  let swiperRef = React.createRef()

  const [enableSkip, setEnableSkip] = useState(true);

  Swiper.prototype.componentWillUpdate = (nextProps, nextState) => {
    setEnableSkip(nextState.index !== 4)
  }

  const showSkip = () => (
    <ApButton
      label='Pular'
      onPress={() => swiperRef.scrollBy(4)}
      type='small'
      containerStyle={{
        width: 'auto', 
        position: 'absolute', 
        bottom: 0, 
        right: 40
      }}
    />
  )

  return (
    <>
      <LinearGradient
        colors={[colors.color5, colors.color7]}
        style={general.gradient}
      />
      <Swiper
        loop={false}
        activeDotColor={colors.aqua} 
        dotColor={colors.gray5}
        showsButtons
        ref={(swiper) => {swiperRef = swiper;}}
      > 
        <View style={general.container}>
          <Image source={Icon} style={{height: 160, width: 160}} />
        </View>
        <OnboardingView 
          text={strings('onboarding.page1_text')}
          illustration={Illustration1}
          enableSkip
        />
        <OnboardingView 
          text={strings('onboarding.page2_text')}
          illustration={Illustration2}
          enableSkip
        />
        <OnboardingView 
          text={strings('onboarding.page3_text')}
          illustration={Illustration3}
          enableSkip
        />
        <OnboardingView 
          text={strings('onboarding.page4_text')}
          illustration={Illustration4}
          enableContinuar
        />
      </Swiper>
      {enableSkip && showSkip()}
    </>
  )
}
