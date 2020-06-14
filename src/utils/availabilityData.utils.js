import { strings } from 'app-locales'
import { Availability } from 'app-constants'

export const availabilityData = [
  {
    label: strings('weekdays.monday'),
    value: Availability.DAY_OF_WEEK.MONDAY,
  },
  {
    label: strings('weekdays.tuesday'),
    value: Availability.DAY_OF_WEEK.TUESDAY,
  },
  {
    label: strings('weekdays.wednesday'),
    value: Availability.DAY_OF_WEEK.WEDNESDAY,
  },
  {
    label: strings('weekdays.thursday'),
    value: Availability.DAY_OF_WEEK.THURSDAY,
  },
  {
    label: strings('weekdays.friday'),
    value: Availability.DAY_OF_WEEK.FRIDAY,
  },
  {
    label: strings('weekdays.saturday'),
    value: Availability.DAY_OF_WEEK.SATURDAY,
  },
  {
    label: strings('weekdays.sunday'),
    value: Availability.DAY_OF_WEEK.SUNDAY,
  },
]
