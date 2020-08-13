import { useSelector } from 'react-redux'
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

const causesValidator = () => {
  const { causes } = useSelector((state) => state.RegisterReducer)

  const disabled = causes.length === 0

  return {
    label: strings('register.finish'),
    disabled,
  }
}

export const RegisterOrganizationValidators = {
  photoValidator,
  descriptionValidator,
  contactValidator,
  causesValidator,
}
