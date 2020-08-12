import { strings } from 'app-locales'

const photoValidator = () => {
  return {
    label: strings('register.continue'),
    disabled: false,
  }
}

const descriptionValidator = () => {
  return {
    label: strings('register.continue'),
    disabled: false,
  }
}

const contactValidator = () => {
  return {
    label: strings('register.continue'),
    disabled: false,
  }
}

export const RegisterOrganizationValidators = {
  photoValidator,
  descriptionValidator,
  contactValidator,
}
