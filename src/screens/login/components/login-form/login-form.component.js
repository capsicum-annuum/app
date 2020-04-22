import React from 'react'
import { ApTextInput, ApPasswordInput, ApButton } from 'app-components'

export const LoginForm = () => {
  return (
    <>
      <ApTextInput placeholder="E-mail" />
      <ApPasswordInput placeholder="Senha" />
      <ApButton
        text="Entrar"
        secondaryColor="#FFF"
        primaryColor="#2B727A"
        style={{ marginTop: 10 }}
      />
    </>
  )
}
