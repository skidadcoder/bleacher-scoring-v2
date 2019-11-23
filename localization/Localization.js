import React from 'react';
import { Text } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en';
import es from './es';

i18n.fallbacks = true;
i18n.translations = { es, en };
i18n.locale = Localization.locale;

const strings = {
  login: i18n.t('login'),
  loading: i18n.t('loading'),
  password: i18n.t('password'),
  email: i18n.t('email'),
  home: i18n.t('home'),
  homeMessage: i18n.t('homeMessage'),
  profile: i18n.t('profile'),
  profileMessage: i18n.t('profileMessage'),
  logout: i18n.t('logout'),
};

export default strings;
