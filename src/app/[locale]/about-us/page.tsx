import { SiteLocale } from 'constants/i18n.constants';
import Link from 'next/link';
import initTranslations from 'services/i18n/initTranslations';

const AboutUs = async ({ params: { locale } }: { params: { locale: SiteLocale } }) => {
    const { t } = await initTranslations(locale, ['about-us']);

  return (
    <main>
      <h1 className='text-3xl font-semibold mb-5'>{t('header')}</h1>
      <p>
        <b>{t('our_address')}:</b>
      </p>
      <p>{t('company_address_line')}</p>
      <Link className='block mt-3 font-bold underline' href='/'>{t('to_main')}</Link>
    </main>
  )
}

export default AboutUs;