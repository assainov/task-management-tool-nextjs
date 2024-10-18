'use client';

import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from 'components/@common/Select';
import { i18nConfig, LocalesForSelection } from 'constants/i18n.constants';
import { setCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const updateLocale = (newLocaleCode: string) => {
    const today = new Date();
    today.setDate(today.getDate() + 7);

    setCookie('NEXT_LOCALE', newLocaleCode, {
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
      router.push(`/${ newLocaleCode }${ currentPathname }`);
    } else {
      router.push(
        currentPathname.replace(`/${ currentLocale }`, `/${ newLocaleCode }`),
      );
    }

    router.refresh();
  };

  const currentLanguageFlag = LocalesForSelection.find((lang) => lang.code === currentLocale)?.flag;

  return (
    <Select onValueChange={updateLocale}>
      <SelectTrigger className="w-[60px] text-md">
        <SelectValue placeholder={currentLanguageFlag}>{currentLanguageFlag}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {LocalesForSelection.map((locale) => (
          <SelectItem key={locale.code} value={locale.code}>{locale.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LanguageSwitcher;
