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

const causesValidator = () => {
  const { causes } = useSelector((state) => state.RegisterReducer)

  const disabled = causes.length === 0

  return {
    label: strings('register.continue'),
    disabled,
  }
}

const skillsValidator = () => {
  const { skills } = useSelector((state) => state.RegisterReducer)

  const disabled = skills.length === 0

  return {
    label: strings('register.continue'),
    disabled,
  }
}

const availabilityValidator = () => {
  return {
    label: strings('register.continue'),
    disabled: false,
  }
}

const locationValidator = () => {
  const { location } = useSelector((state) => state.RegisterReducer)

  const disabled = !location.stateName && !location.cityName

  return {
    label: strings('register.finish'),
    disabled,
  }
}

export const RegisterVoluntaryValidators = {
  photoValidator,
  descriptionValidator,
  causesValidator,
  skillsValidator,
  availabilityValidator,
  locationValidator,
}
