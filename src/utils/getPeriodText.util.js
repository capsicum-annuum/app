import { strings } from 'app-locales'

// Sorry about this

export const getPeriodText = (periods) => {
  const { morning, afternoon, night } = periods

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
