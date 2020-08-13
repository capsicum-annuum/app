import React, { useRef } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import {
  ApTextInput,
  ApPasswordInput,
  ApButton,
  ApButtonTypes,
} from 'app-components'
import { useSelector } from 'react-redux'
import { useToaster } from 'app-context'
import { Formik } from 'formik'
import { loginFormSchema } from 'app-validators'

const INITIAL_FORM_VALUES = {
  email: '',
  password: '',
}

export const LoginForm = ({ onSubmit }) => {
  const { showLoader } = useSelector((state) => state.LoginReducer)
  const { queue } = useToaster()
  const passwordRef = useRef(null)

  return (
    <Formik
      validateOnMount
      initialValues={INITIAL_FORM_VALUES}
      validationSchema={loginFormSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
        <KeyboardAvoidingView behavior="padding" style={{ width: '100%' }}>
          <ApTextInput
            autoCapitalize="none"
            placeholder="E-mail"
            textContentType="emailAddress"
            onChangeText={handleChange('email')}
            value={values.email}
            returnKeyType="next"
            alert={touched.email && errors.email}
            onSubmitEditing={() => passwordRef.current.focus()}
            alertCallback={queue}
          />
          <ApPasswordInput
            inputRef={passwordRef}
            placeholder="Senha"
            textContentType="password"
            onChangeText={handleChange('password')}
            value={values.password}
            returnKeyType="done"
            alert={touched.password && errors.password}
            alertCallback={queue}
          />
          <ApButton
            label="Entrar"
            type={ApButtonTypes.SECONDARY}
            disabled={!isValid}
            loading={showLoader}
            onPress={handleSubmit}
            style={{ marginTop: 20 }}
          />
        </KeyboardAvoidingView>
      )}
    </Formik>
  )
}
