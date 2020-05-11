import I18n from 'i18n-js'
import * as Localization from 'expo-localization'

import { ptBr } from './pt-br'

const translations = {
  'pt-BR': ptBr,
}

I18n.translations = translations
I18n.locale = Localization.locale
I18n.defaultLocale = 'pt-BR'
I18n.fallbacks = true

const strings = (...args) => {
  return I18n.t(args)
}

export { strings }
