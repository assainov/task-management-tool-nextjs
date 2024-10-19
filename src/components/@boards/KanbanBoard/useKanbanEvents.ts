import { DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { hasDraggableData } from './utils';
import { Task } from './BoardCard';
import { TaskStatus } from '@/types/tasks.types';

const initialTasks: Task[] = [
  {
    id: 'task1',
    columnId: TaskStatus.Done,
    content: 'Project initiation and planning',
  },
  {
    id: 'task2',
    columnId: TaskStatus.Done,
    content: 'Gather requirements from stakeholders',
  },
  {
    id: 'task5',
    columnId: TaskStatus.InProgress,
    content: 'Design color scheme and typography',
  },
  {
    id: 'task6',
    columnId: TaskStatus.InProgress,
    content: 'Implement user authentication',
  },
  {
    id: 'task7',
    columnId: TaskStatus.New,
    content: 'Build contact us page',
  },
  {
    id: 'task8',
    columnId: TaskStatus.New,
    content: 'Create product catalog',
  },
  {
    id: 'task9',
    columnId: TaskStatus.New,
    content: 'Develop about us page',
  },
  {
    id: 'task10',
    columnId: TaskStatus.New,
    content: 'Optimize website for mobile devices',
  },
];

export const useKanbanEvents = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const onDragStart = (event: DragStartEvent) => {
    if (!hasDraggableData(event.active)) return;
    const data = event.active.data.current;

    setTimeout(() => setActiveTask(data?.task), 0);
  };

  const onDragEnd = () => {
    setTimeout(() => setActiveTask(null), 0);
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    if (!hasDraggableData(active) || !hasDraggableData(over)) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    const isActiveATask = activeData?.type === 'Task';
    const isOverATask = overData?.type === 'Task';

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTimeout(() => setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);
        const activeTask = tasks[activeIndex];
        const overTask = tasks[overIndex];
        if (
          activeTask
            && overTask
            && activeTask.columnId !== overTask.columnId
        ) {
          activeTask.columnId = overTask.columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      }), 0);
    }

    const isOverAColumn = overData?.type === 'Column';

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTimeout(() => setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const activeTask = tasks[activeIndex];
        if (activeTask) {
          activeTask.columnId = overId as TaskStatus;
          return arrayMove(tasks, activeIndex, activeIndex);
        }
        return tasks;
      }), 0);
    }
  };

  return {
    tasks,
    activeTask,
    onDragStart,
    onDragEnd,
    onDragOver,
  };
};
