import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

const options = [
  { title: 'home', href: '/' },
  { title: 'boards', href: '/boards/default' },
];

const Links = () => {
  const { t } = useTranslation('common');

  return (
    <nav className="flex-col justify-end gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      {options.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="text-foreground transition-colors hover:text-foreground"
        >
          {t(link.title)}
        </Link>
      ))}
    </nav>
  );
};

export default Links;
