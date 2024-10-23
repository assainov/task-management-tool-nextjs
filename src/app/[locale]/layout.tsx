import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import { i18nConfig, SiteLocale } from 'constants/i18n.constants';
import { dir } from 'i18next';
import { StoreProvider } from 'services/redux';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Unicode Task Management by Ilyas Assainov',
  description: 'An interview delivery for an assignment.',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: SiteLocale }
}>) {
  return (
    <StoreProvider>
      <html lang={locale} dir={dir(locale)}>
        <body
          className={`${ geistSans.variable } ${ geistMono.variable } antialiased`}
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
