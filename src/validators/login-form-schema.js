import { string, object } from 'yup'

export const loginFormSchema = object().shape({
  email: string().required('Campo obrigatório').email('E-mail inválido'),
  password: string()
    .required('Campo obrigatório')
    .min(6, 'Digite pelo menos 6 caracteres'),
})
