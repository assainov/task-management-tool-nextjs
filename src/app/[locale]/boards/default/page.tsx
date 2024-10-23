import React from 'react';
import {
  CardContent,
} from 'components/@common/Card';
import KanbanBoard from 'components/@boards/KanbanBoard';
import MainNavigation from 'components/@navigation/MainNavigation';
import initTranslations from 'services/i18n/initTranslations';
import { SiteLocale } from 'constants/i18n.constants';
import TranslationsProvider from 'services/i18n/TranslationsProvider';
import BoardHeader from 'components/@boards/BoardHeader';

const translationNamespaces = ['boards', 'common'];

const DefaultBoardPage = async ({ params: { locale } }: { params: { locale: SiteLocale } }) => {
  const { resources } = await initTranslations(locale, translationNamespaces);

  return (
    <TranslationsProvider
      namespaces={translationNamespaces}
      locale={locale}
      resources={resources}
    >
      <MainNavigation />
      <BoardHeader />
      <CardContent>
        <KanbanBoard />
      </CardContent>
    </TranslationsProvider>
  );
};

export default DefaultBoardPage;
