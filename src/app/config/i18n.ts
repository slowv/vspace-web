import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import {store} from '../store'
import {appConfig} from './appConfig'

// const currentLanguage = store.getState().config.language
// export const systemLanguage: string = (process.env.REACT_APP_LANGUAGE as string) || appConfig.defaultLanguage

export const language = store.getState().config.language || appConfig.defaultLanguage

export const changeLanguageCommon = (lng: string) => {
  i18n.changeLanguage(lng).then()
}

enum ELanguages {
  vi = 'vi',
  en = 'en',
  ko = 'ko',
}

type Ii18nConfigBase = {
  [key in ELanguages]: ELanguages[]
}

const i18nConfigBase: Ii18nConfigBase = {
  vi: [ELanguages.vi, ELanguages.en, ELanguages.ko],
  en: [ELanguages.vi, ELanguages.en, ELanguages.ko],
  ko: [ELanguages.vi, ELanguages.en, ELanguages.ko],
}

const getI18nResources = (country: string) => {
  // @ts-ignore
  const languages = i18nConfigBase[country]
  const resources = {}
  if (languages) {
    // @ts-ignore
    languages.forEach((el: string) => (resources[el] = { translation: require(`src/assets/i18n/${el}.json`) }))
  }
  return resources
}

i18n.use(initReactI18next).init({
  // debug: true,
  resources: getI18nResources(language),
  lng: language,
  fallbackLng: language,
})

export default i18n
