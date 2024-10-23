import LanguageSwitcher from './LanguageSwitcher';
import NotificationsToggle from './NotificationsToggle';
import UserMenu from './UserMenu';

const UserSection = () => (
  <div className="basis-[64px] flex justify-end items-center gap-4">
    <NotificationsToggle />
    <LanguageSwitcher />
    <UserMenu />
  </div>
);

export default UserSection;
