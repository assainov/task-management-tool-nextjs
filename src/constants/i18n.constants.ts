export enum SiteLocale {
  En = 'en',
  Ar = 'ar',
  Zh = 'zh',
  Ru = 'ru',
}

export const LocalesForSelection = [
  {
    code: SiteLocale.En,
    name: 'English',
  },
  {
    code: SiteLocale.Ar,
    name: 'Arabic',
  },
  {
    code: SiteLocale.Zh,
    name: 'Chinese',
  },
  {
    code: SiteLocale.Ru,
    name: 'Russian',
  },
];

export const DEFAULT_LOCALE = SiteLocale.En;
export const DEFAULT_DIRECTION = 'ltr';
export const LOCALES = LocalesForSelection.map((locale) => locale.code);

export const i18nConfig = {
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
};
