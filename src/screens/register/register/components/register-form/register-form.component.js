import React, { useState, useEffect, useRef } from 'react'
import { View } from 'react-native'
import {
  ApButton,
  ApButtonTypes,
  ApTextInput,
  ApPasswordInput,
} from 'app-components'
import { Formik } from 'formik'
import { registerFormSchema } from 'app-validators'
import { Role } from 'app-constants'
import { useToaster } from 'app-context'
import { useSelector } from 'react-redux'
import { strings } from 'app-locales'

import Styles from './register-form.style'

const INITIAL_FORM_VALUES = {
  cnpj: '',
  name: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirmation: '',
}

export const RegisterForm = ({ role, onSubmit }) => {
  const [isVoluntary, setIsVoluntary] = useState(true)

  const { checkBaseUserDataLoader } = useSelector(
    (state) => state.RegisterReducer,
  )

  const emailRef = useRef(null)
  const cnpjRef = useRef(null)
  const phoneRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmationRef = useRef(null)

  const { queue } = useToaster()

  useEffect(() => {
    setIsVoluntary(Role.VOLUNTARY === role)
  }, [])

  const placeHolderName = isVoluntary
    ? strings('register.full_name')
    : strings('register.organization_name')

  const onSubmitEmailInput = () => {
    return isVoluntary ? phoneRef.current.focus() : cnpjRef.current.focus()
  }

  return (
    <Formik
      validateOnMount
      initialValues={INITIAL_FORM_VALUES}
      validationSchema={registerFormSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
        <View style={Styles.container}>
          <ApTextInput
            returnKeyType="next"
            autoCapitalize="words"
            placeholder={placeHolderName}
            onChangeText={handleChange('name')}
            value={values.name}
            alert={touched.name && errors.name}
            alertCallback={queue}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <ApTextInput
            inputRef={emailRef}
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder={strings('register.email')}
            value={values.email}
            alert={touched.email && errors.email}
            alertCallback={queue}
            onChangeText={handleChange('email')}
            onSubmitEditing={onSubmitEmailInput}
          />
          {!isVoluntary && (
            <ApTextInput
              inputRef={cnpjRef}
              returnKeyType="next"
              keyboardType="numbers-and-punctuation"
              placeholder={strings('register.cnpj')}
              optional
              value={values.cpnj}
              alert={touched.cpnj && errors.cpnj}
              alertCallback={queue}
              onChangeText={handleChange('cnpj')}
              onSubmitEditing={() => phoneRef.current.focus()}
            />
          )}
          <ApTextInput
            inputRef={phoneRef}
            returnKeyType="next"
            keyboardType="numbers-and-punctuation"
            placeholder={strings('register.phone')}
            value={values.phone}
            alert={touched.phone && errors.phone}
            alertCallback={queue}
            onChangeText={handleChange('phone')}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <ApPasswordInput
            inputRef={passwordRef}
            returnKeyType="next"
            placeholder={strings('register.password')}
            value={values.password}
            alert={touched.password && errors.password}
            alertCallback={queue}
            onChangeText={handleChange('password')}
            onSubmitEditing={() => passwordConfirmationRef.current.focus()}
          />
          <ApPasswordInput
            inputRef={passwordConfirmationRef}
            returnKeyType="done"
            placeholder={strings('register.password_confirmation')}
            value={values.passwordConfirmation}
            alert={touched.passwordConfirmation && errors.passwordConfirmation}
            alertCallback={queue}
            onChangeText={handleChange('passwordConfirmation')}
          />
          <ApButton
            enabled={isValid}
            loading={checkBaseUserDataLoader}
            type={ApButtonTypes.SECONDARY}
            onPress={handleSubmit}
            containerStyle={Styles.button}
            label={strings('register.register')}
          />
        </View>
      )}
    </Formik>
  )
}
