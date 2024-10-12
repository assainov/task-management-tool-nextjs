'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance, Resource } from 'i18next';
import { SiteLocale } from 'constants/i18n.constants';
import initTranslations from './initTranslations';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: Readonly<{
    children: React.ReactNode;
    locale: SiteLocale;
    namespaces: string[],
    resources: Resource
  }>) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
