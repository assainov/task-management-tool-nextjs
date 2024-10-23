'use client';

import React from 'react';

import CommandPopup from '../CommandPopup';
import UserSection from './UserSection';
import LinksSection from './LinksSection';
import SearchSection from './SearchSection';
import LogoSection from './LogoSection';

const MainNavigation = () => (
  <header className="flex items-center gap-8 h-16 px-8 border-b">
    <LogoSection />
    <SearchSection />
    <LinksSection />
    <UserSection />
    <CommandPopup />
  </header>
);

export default MainNavigation;
