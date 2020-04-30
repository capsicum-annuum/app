import { string, object, ref } from 'yup'

export const registerFormSchema = object().shape({
  email: string().required('Campo obrigatório').email('E-mail inválido'),
  phone: string().required('Campo obrigatório'),
  password: string()
    .required('Campo obrigatório')
    .min(6, 'Digite pelo menos 6 caracteres'),
  passwordConfirmation: string().oneOf(
    [ref('password'), null],
    'Essas senhas não coincidem',
  ),
})
