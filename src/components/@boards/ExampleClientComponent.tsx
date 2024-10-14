'use client';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../@navigation/LanguageSwitcher/LanguageSwitcher';

export default function ExampleClientComponent() {
  const { t } = useTranslation();
  const userName = 'Ilyas';
  return (
    <div>
      <p>{t('common:good_wish', { userName })}</p>
      <LanguageSwitcher />
    </div>
  );
}
