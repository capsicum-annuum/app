import { strings } from 'app-locales'
import { Availability } from 'app-constants'

// Sorry about this

export const getDayShiftText = (selectedAvailabilities) => {
  let morning
  let afternoon
  let night

  selectedAvailabilities.map(({ dayShift }) => {
    morning = dayShift === Availability.DAY_SHIFT.MORNING || morning
    afternoon = dayShift === Availability.DAY_SHIFT.AFTERNOON || afternoon
    night = dayShift === Availability.DAY_SHIFT.NIGHT || night
  })

  if (morning && !afternoon && !night) {
    return strings('register.morning')
  } else if (morning && afternoon && !night) {
    return strings('register.morning_and_afternoon')
  } else if (morning && !afternoon && night) {
    return strings('register.morning_and_night')
  } else if (morning && afternoon && night) {
    return strings('register.all_day')
  } else if (!morning && afternoon && !night) {
    return strings('register.afternoon')
  } else if (!morning && afternoon && night) {
    return strings('register.afternoon_and_night')
  } else if (!morning && !afternoon && night) {
    return strings('register.night')
  }

  return '-'
}
