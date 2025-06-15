import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en/translation.json';
import tr from './locales/tr/translation.json';
import ar from './locales/ar/translation.json';
import zh from './locales/zh/translation.json';
import ru from './locales/ru/translation.json';
import nl from './locales/nl/translation.json';
import az from './locales/az/translation.json';

const LANGUAGE_KEY = 'user-language';

const resources = {
  en: { translation: en },
  tr: { translation: tr },
  ar: { translation: ar },
  zh: { translation: zh },
  ru: { translation: ru },
  nl: { translation: nl },
  az: { translation: az },
};

const getSavedLanguage = async () => {
  const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
  if (savedLang) return savedLang;

  const locales = RNLocalize.getLocales();
  return locales?.[0]?.languageCode || 'en';
};

const initI18n = async () => {
  const language = await getSavedLanguage();

  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: language,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
};

initI18n();

export const changeLanguage = async (langCode) => {
  await i18n.changeLanguage(langCode);
  await AsyncStorage.setItem(LANGUAGE_KEY, langCode);
};

export default i18n;
