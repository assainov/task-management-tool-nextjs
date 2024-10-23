'use client';

import { CardDescription, CardHeader, CardTitle } from 'components/@common/Card';
import { Skeleton } from 'components/@common/Skeleton';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'services/redux/hooks';
import { selectStatus } from '@/features/tasks/tasksSlice';

const TaskModal = () => {
  const { t } = useTranslation('boards');
  const taskDownloadStatus = useAppSelector(selectStatus);

  return (
    <CardHeader>
      {taskDownloadStatus === 'initial' || taskDownloadStatus === 'loading' ? (
        <>
          <Skeleton data-testid="header-skeleton" className="h-[24px] w-[250px]" />
          <Skeleton className="h-[20px] mt-2 w-[150px]" />
        </>
      ) : (
        <>
          <CardTitle>{t('board_name')}</CardTitle>
          <CardDescription>
            {t('board_description')}
          </CardDescription>
        </>
      )}
    </CardHeader>
  );
};

export default TaskModal;
