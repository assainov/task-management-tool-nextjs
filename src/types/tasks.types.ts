import { User } from './users.types';

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  assignee?: User;
  createdAt: string;
  lastUpdatedAt?: string;
}

export enum TaskStatus {
  New = 'new',
  InProgress = 'in-progress',
  Done = 'done',
}
