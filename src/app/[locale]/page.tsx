import ExampleClientComponent from '@/components/ExampleClientComponent';
import { KanbanBoard } from '@/components/KanbanBoard/KanbanBoard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SiteLocale } from 'constants/i18n.constants';
import Link from 'next/link';
import initTranslations from 'services/i18n/initTranslations';
import TranslationsProvider from 'services/i18n/TranslationsProvider';

const translationNamespaces = ['home', 'common'];

const Home = async ({ params: { locale } }: { params: { locale: SiteLocale } }) => {
  const { t, resources } = await initTranslations(locale, translationNamespaces);

  return (
    <TranslationsProvider
      namespaces={translationNamespaces}
      locale={locale}
      resources={resources}>
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
  )
}

export default Home;