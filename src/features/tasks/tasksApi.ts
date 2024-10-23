import { Task } from '@/types/tasks.types';

export const fetchTasks = async () => {
  const response = await fetch('/api/tasks', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result: { tasks: Task[] } = await response.json();

  return result;
};
