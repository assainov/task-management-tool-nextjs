import { Button } from 'components/@common/Button';
import { Bell } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NotificationsToggle = () => {
  const { t } = useTranslation('common');

  return (
    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
      <Bell className="h-4 w-4" />
      <span className="sr-only">{t('accessibility_toggle_notifications')}</span>
    </Button>
  );
};

export default NotificationsToggle;
