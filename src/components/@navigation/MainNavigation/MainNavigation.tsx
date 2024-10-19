'use client';

import React from 'react';
import UnicodeLogo from 'components/@icons/Unicode.svg';

import CommandPopup from '../CommandPopup';
import LanguageSwitcher from '../LanguageSwitcher';
import SearchTasks from './SearchTasks';
import Links from './Links';
import NotificationsToggle from './NotificationsToggle';
import UserMenu from './UserMenu';

const MainNavigation = () => (
  <header className="flex items-center gap-8 h-16 px-8 border-b">
    <div className="basis-[150px]">
      <UnicodeLogo className="fill-black" />
    </div>
    <div className="basis-[300px]">
      <SearchTasks />
    </div>
    <div className="grow">
      <Links />
    </div>
    <div className="basis-[64px] flex justify-end items-center gap-4">
      <NotificationsToggle />
      <LanguageSwitcher />
      <UserMenu />
    </div>
    <CommandPopup />
  </header>
);

export default MainNavigation;
