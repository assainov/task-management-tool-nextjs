import { Task, TaskStatus } from '@/types/tasks.types';

export const columns: Column[] = [
  { id: TaskStatus.New, title: 'new' },
  { id: TaskStatus.InProgress, title: 'in_progress' },
  { id: TaskStatus.Done, title: 'done' },
];

export interface Column {
  id: TaskStatus;
  title: string;
}

type TaskType = 'Task';

export interface TaskDragData {
  type: TaskType;
  task: Task;
}

export type ColumnType = 'Column';

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}
