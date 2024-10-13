import { SiteLocale } from 'constants/i18n.constants';
import initTranslations from 'services/i18n/initTranslations';
import TranslationsProvider from 'services/i18n/TranslationsProvider';
import Link from 'next/link';
import { Button } from '@/components/@common/Button';

const translationNamespaces = ['home', 'common'];

const Home = async ({ params: { locale } }: { params: { locale: SiteLocale } }) => {
  const { resources } = await initTranslations(locale, translationNamespaces);

  return (
    <TranslationsProvider
      namespaces={translationNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex items-center justify-center h-screen w-screen">
        <Button asChild>
          <Link href="/boards/default">Enter the app</Link>
        </Button>
      </main>
    </TranslationsProvider>
  );
};

export default Home;
