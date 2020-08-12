import React from 'react'
import { RegisterOrganizationValidators } from 'app-validators'
import {
  PhotoStep,
  DescriptionStep,
  SkillsStep,
  CausesStep,
  AvailabilityStep,
  LocationStep,
} from 'app-screens/register/register-info/steps'
import { strings } from 'app-locales'

export const registerOrganizationSteps = [
  {
    title: strings('register.photo_title'),
    description: strings('register.photo_description'),
    selected: true,
    renderContent: () => <PhotoStep />,
    validator: RegisterOrganizationValidators.photoValidator,
  },
  {
    title: strings('register.description_title'),
    description: strings('register.description_description'),
    selected: false,
    renderContent: () => <DescriptionStep />,
    validator: RegisterOrganizationValidators.descriptionValidator,
  },
  {
    title: strings('register.skills_title'),
    description: strings('register.skills_description'),
    selected: false,
    renderContent: () => <SkillsStep />,
    validator: RegisterOrganizationValidators.skillsValidator,
  },
  {
    title: strings('register.causes_title'),
    description: strings('register.causes_description'),
    selected: false,
    renderContent: () => <CausesStep />,
    validator: RegisterOrganizationValidators.causesValidator,
  },
  {
    title: strings('register.availability_title'),
    description: strings('register.availability_description'),
    selected: false,
    renderContent: () => <AvailabilityStep />,
    validator: RegisterOrganizationValidators.availabilityValidator,
  },
  {
    title: strings('register.location_title'),
    description: strings('register.location_description'),
    selected: false,
    renderContent: () => <LocationStep />,
    validator: RegisterOrganizationValidators.locationValidator,
  },
]
