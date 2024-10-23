import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { fetchAsync, selectStatus } from '@/features/tasks/tasksSlice';

export const useFetchTasks = () => {
  const dispatch = useAppDispatch();
  const tasksDownloadStatus = useAppSelector(selectStatus);

  useEffect(() => {
    if (tasksDownloadStatus === 'initial') {
      dispatch(fetchAsync());
    }
  }, [tasksDownloadStatus, dispatch]);

  return tasksDownloadStatus;
};
