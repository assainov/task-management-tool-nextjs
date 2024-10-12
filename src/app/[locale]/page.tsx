import { SiteLocale } from 'constants/i18n.constants';
import initTranslations from 'services/i18n/initTranslations';
import TranslationsProvider from 'services/i18n/TranslationsProvider';
import { KanbanBoard } from '@/components/KanbanBoard/KanbanBoard';
import {
  CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/Card';

const translationNamespaces = ['home', 'common'];

const Home = async ({ params: { locale } }: { params: { locale: SiteLocale } }) => {
  const { resources } = await initTranslations(locale, translationNamespaces);

  return (
    <TranslationsProvider
      namespaces={translationNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <CardHeader>
          <CardTitle>Task Management Tool</CardTitle>
          <CardDescription>
            Start by creating your own task.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <KanbanBoard />
        </CardContent>
      </main>
    </TranslationsProvider>
  );
};

export default Home;
