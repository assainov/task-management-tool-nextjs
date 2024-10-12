export enum SiteLocale {
  EN = 'en',
  AR = 'ar',
  ZH = 'zh',
  RU = 'ru',
}

export const LocalesForSelection = [
  {
    code: SiteLocale.EN,
    name: 'English'
  },
  {
    code: SiteLocale.AR,
    name: 'Arabic'
  },
  {
    code: SiteLocale.ZH,
    name: 'Chinese'
  },
  {
    code: SiteLocale.RU,
    name: 'Russian'
  },
];

export const DEFAULT_LOCALE = SiteLocale.EN;
export const DEFAULT_DIRECTION = 'ltr';
export const LOCALES = LocalesForSelection.map(locale => locale.code);

