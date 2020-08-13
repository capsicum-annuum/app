import React from 'react'
import { RegisterVoluntaryValidators } from 'app-validators'
import {
  PhotoStep,
  DescriptionStep,
  SkillsStep,
  CausesStep,
  AvailabilityStep,
  LocationStep,
} from 'app-screens/register/register-info/steps'
import { strings } from 'app-locales'

export const registerVoluntarySteps = [
  {
    title: strings('register.photo_title.voluntary'),
    description: strings('register.photo_description.voluntary'),
    selected: true,
    renderContent: () => <PhotoStep />,
    validator: RegisterVoluntaryValidators.photoValidator,
  },
  {
    title: strings('register.description_title.voluntary'),
    description: strings('register.description_description.voluntary'),
    selected: false,
    renderContent: () => <DescriptionStep />,
    validator: RegisterVoluntaryValidators.descriptionValidator,
  },
  {
    title: strings('register.skills_title'),
    description: strings('register.skills_description'),
    selected: false,
    renderContent: () => <SkillsStep />,
    validator: RegisterVoluntaryValidators.skillsValidator,
  },
  {
    title: strings('register.causes_title'),
    description: strings('register.causes_description.voluntary'),
    selected: false,
    renderContent: () => <CausesStep />,
    validator: RegisterVoluntaryValidators.causesValidator,
  },
  {
    title: strings('register.availability_title'),
    description: strings('register.availability_description'),
    selected: false,
    renderContent: () => <AvailabilityStep />,
    validator: RegisterVoluntaryValidators.availabilityValidator,
  },
  {
    title: strings('register.location_title'),
    description: strings('register.location_description'),
    selected: false,
    renderContent: () => <LocationStep />,
    validator: RegisterVoluntaryValidators.locationValidator,
  },
]
