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

const locationValidator = () => {
  const {
    stateName,
    cityName,
    district,
    streetname,
    addressNumber,
  } = useSelector((state) => state.RegisterReducer.location)

  const disabled =
    !stateName || !cityName || !district || !streetname || !addressNumber

  return {
    label: strings('register.continue'),
    disabled,
  }
}

export const RegisterOrganizationValidators = {
  photoValidator,
  descriptionValidator,
  contactValidator,
  locationValidator,
}
