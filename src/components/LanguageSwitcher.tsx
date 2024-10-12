import { i18nConfig } from 'config/i18n.config';
import { LocalesForSelection } from 'constants/i18n.constants';
import { setCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const updateLocale: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newLocale = e.target.value;

    const today = new Date();
    today.setDate(today.getDate() + 7);

    setCookie('NEXT_LOCALE', newLocale, {
      sameSite: 'none',
      path: '/',
      secure: true,
      expires: today,
    });

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale
            && !i18nConfig.defaultLocale
    ) {
      router.push(`/${ newLocale }${ currentPathname }`);
    } else {
      router.push(
        currentPathname.replace(`/${ currentLocale }`, `/${ newLocale }`),
      );
    }

    router.refresh();
  };

  return (
    <select
      onChange={updateLocale}
      value={currentLocale}
      className="mt-5 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {LocalesForSelection.map((locale) => (
        <option value={locale.code}>{locale.name}</option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
