import React from 'react';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import UnicodeLogo from 'components/@icons/Unicode.svg';
import { cn } from 'components/@common/lib/utils';
import { Input } from '../../@common/Input';
import {
  NavigationMenuLink,
} from '../../@common/NavigationMenu';
import { Avatar, AvatarFallback, AvatarImage } from '../../@common/Avatar';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from '../../@common/DropdownMenu';
import { Button } from '../../@common/Button';
import CommandPopup from '../CommandPopup';

const MainNavigation = () => (
  <header className="flex items-center gap-8 h-16 px-8 border-b">
    <div className="basis-[150px]">
      <UnicodeLogo className="fill-black" />
    </div>
    <div className="basis-[300px]">
      <Input
        type="text"
        placeholder="Search tasks"
        endIcon={(
          <kbd className="pointer-events-none absolute inset-y-2 right-2 rtl:left-2 rtl:right-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>
            K
          </kbd>
          )}
      />
    </div>
    <nav className="flex-col grow justify-end gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="#"
        className="text-foreground transition-colors hover:text-foreground"
      >
        Dashboard
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Orders
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Products
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Customers
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Analytics
      </Link>
    </nav>
    <div className=" basis-[64px] flex justify-end items-center gap-4">
      <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
        <Bell className="h-4 w-4" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full relative group">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full group-hover:bg-gray-200 z-[-1]" />
            <Avatar className="h-10 w-10 select-none">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <CommandPopup />
  </header>
);

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({
  className, title, children, ...props
}, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';

export default MainNavigation;
