import React from 'react'
import { RegisterOrganizationValidators } from 'app-validators'
import { PhotoStep } from 'app-screens/register/register-info/steps'
import { strings } from 'app-locales'

export const registerOrganizationSteps = [
  {
    title: strings('register.photo_title.organization'),
    description: strings('register.photo_description.organization'),
    selected: true,
    renderContent: () => <PhotoStep />,
    validator: RegisterOrganizationValidators.photoValidator,
  },
]
