import React from 'react';
import { Button } from 'components/@common/Button';
import { Avatar, AvatarFallback, AvatarImage } from 'components/@common/Avatar';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '../../@common/DropdownMenu';

const UserMenu = () => {
  const { t } = useTranslation('common');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full relative group">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full group-hover:bg-gray-200 z-[-1]" />
          <Avatar className="h-10 w-10 select-none">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="sr-only">{t('accessibility_toggle_user')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>{t('logout')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
