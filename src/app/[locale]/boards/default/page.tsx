import React from 'react';
import {
  CardContent, CardDescription, CardHeader, CardTitle,
} from 'components/@common/Card';
import KanbanBoard from 'components/@boards/KanbanBoard';
import MainNavigation from 'components/@navigation/MainNavigation';
import TranslationsProvider from 'services/i18n/TranslationsProvider';
import initTranslations from 'services/i18n/initTranslations';
import { SiteLocale } from 'constants/i18n.constants';

const translationNamespaces = ['boards'];

const DefaultBoardPage = async ({ params: { locale } }: { params: { locale: SiteLocale } }) => {
  const { t, resources } = await initTranslations(locale, translationNamespaces);
  return (
    <TranslationsProvider
      namespaces={translationNamespaces}
      locale={locale}
      resources={resources}
    >
      <MainNavigation />
      <CardHeader>
        <CardTitle>{t('board_name')}</CardTitle>
        <CardDescription>
          {t('board_description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <KanbanBoard />
      </CardContent>
    </TranslationsProvider>
  );
};

export default DefaultBoardPage;
