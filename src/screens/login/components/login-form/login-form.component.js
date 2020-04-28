import React, { useEffect } from 'react'
import { ApTextInput, ApPasswordInput, ApButton } from 'app-components'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { LoginActions } from 'app-redux'
import { useToaster } from 'app-context'
import { Formik } from 'formik'
import { Screens } from 'app-constants'
import { loginFormSchema } from 'app-validators'

const INITIAL_FORM_VALUES = {
  email: '',
  password: '',
}

export const LoginForm = () => {
  const { showLoader, error, success } = useSelector(
    (state) => state.LoginReducer,
  )

  const { queue } = useToaster()
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    if (error) {
      queue(error.message)
    }
  }, [error])

  useEffect(() => {
    if (success) {
      navigation.navigate(Screens.MAIN_STACK)

      dispatch(LoginActions.clear())
    }
  }, [success])

  const onSubmit = (values) => {
    dispatch(LoginActions.loginRequest(values))
  }

  return (
    <Formik
      isInitialValid={false}
      initialValues={INITIAL_FORM_VALUES}
      validationSchema={loginFormSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
        <>
          <ApTextInput
            autoCapitalize="none"
            placeholder="E-mail"
            onChangeText={handleChange('email')}
            value={values.email}
            alert={touched.email && errors.email}
            alertCallback={queue}
          />
          <ApPasswordInput
            placeholder="Senha"
            textContentType="password"
            onChangeText={handleChange('password')}
            value={values.password}
            alert={touched.password && errors.password}
            alertCallback={queue}
          />
          <ApButton
            text="Entrar"
            loading={showLoader}
            enabled={isValid}
            onPress={handleSubmit}
            secondaryColor="#FFF"
            primaryColor="#2B727A"
            style={{ marginTop: 10 }}
          />
        </>
      )}
    </Formik>
  )
}
