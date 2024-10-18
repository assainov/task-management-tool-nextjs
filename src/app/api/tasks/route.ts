import { NextResponse } from 'next/server';
import { TaskStatus } from '@/types/tasks.types';

const mockData = [
  {
    id: 'task1',
    status: TaskStatus.Done,
    title: 'Project initiation and planning',
    createdAt: new Date().toUTCString(),
  },
  {
    id: 'task2',
    status: TaskStatus.Done,
    title: 'Gather requirements from stakeholders',
    createdAt: new Date().toUTCString(),
  },
  {
    id: 'task5',
    status: TaskStatus.InProgress,
    title: 'Design color scheme and typography',
    createdAt: new Date().toUTCString(),
  },
  {
    id: 'task6',
    status: TaskStatus.InProgress,
    title: 'Implement user authentication',
    createdAt: new Date().toUTCString(),
  },
  {
    id: 'task7',
    status: TaskStatus.New,
    title: 'Build contact us page',
    createdAt: new Date().toUTCString(),
  },
  {
    id: 'task8',
    status: TaskStatus.New,
    title: 'Create product catalog',
    createdAt: new Date().toUTCString(),
  },
  {
    id: 'task9',
    status: TaskStatus.New,
    title: 'Develop about us page',
    createdAt: new Date().toUTCString(),
  },
  {
    id: 'task10',
    status: TaskStatus.New,
    title: 'Optimize website for mobile devices',
    createdAt: new Date().toUTCString(),
  },
];

export async function GET() {
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500)); // eslint-disable-line

  return NextResponse.json({ tasks: mockData });
}
