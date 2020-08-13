import React from 'react'
import { RegisterOrganizationValidators } from 'app-validators'
import {
  PhotoStep,
  DescriptionStep,
  ContactStep,
  OrganizationLocationStep,
} from 'app-screens/register/register-info/steps'
import { strings } from 'app-locales'

export const registerOrganizationSteps = [
  {
    title: strings('register.photo_title.organization'),
    description: strings('register.photo_description.organization'),
    selected: true,
    renderContent: () => <PhotoStep />,
    validator: RegisterOrganizationValidators.photoValidator,
  },
  {
    title: strings('register.description_title.organization'),
    description: strings('register.description_description.organization'),
    selected: false,
    renderContent: () => <DescriptionStep />,
    validator: RegisterOrganizationValidators.descriptionValidator,
  },
  {
    title: strings('register.contact_title'),
    description: strings('register.contact_description'),
    selected: false,
    renderContent: () => <ContactStep />,
    validator: RegisterOrganizationValidators.contactValidator,
  },
  {
    title: strings('register.location_title'),
    description: strings('register.location_description.organization'),
    selected: true,
    renderContent: () => <OrganizationLocationStep />,
    validator: RegisterOrganizationValidators.photoValidator,
  },
]
