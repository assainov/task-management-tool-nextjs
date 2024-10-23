import { DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { hasDraggableData } from './utils';
import { Task, TaskStatus } from '@/types/tasks.types';
import { selectTasks, updateTasks } from '@/features/tasks/tasksSlice';

export const useKanbanEvents = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

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

    const oldTasks = JSON.parse(JSON.stringify(tasks)) as Task[];

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTimeout(() => {
      // ATTENTION: this is the logic we could have put in the reducer, but it's too specific to Drag&Drop
      // So, we won't mix it with application logic, and treat it as a UI logic!

        const activeIndex = oldTasks.findIndex((t) => t.id === activeId);
        const overIndex = oldTasks.findIndex((t) => t.id === overId);
        const activeTask = oldTasks[activeIndex];
        const overTask = oldTasks[overIndex];
        if (
          activeTask
            && overTask
            && activeTask.status !== overTask.status
        ) {
          activeTask.status = overTask.status;
          const updatedTasks = arrayMove(oldTasks, activeIndex, overIndex - 1);
          dispatch(updateTasks(updatedTasks));
          return;
        }

        const updatedTasks = arrayMove(oldTasks, activeIndex, overIndex);
        dispatch(updateTasks(updatedTasks));
      }, 0);
    }

    const isOverAColumn = overData?.type === 'Column';

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTimeout(() => {
        const activeIndex = oldTasks.findIndex((t) => t.id === activeId);
        const activeTask = oldTasks[activeIndex];
        if (activeTask) {
          activeTask.status = overId as TaskStatus;

          const updatedTasks = arrayMove(oldTasks, activeIndex, activeIndex);
          dispatch(updateTasks(updatedTasks));
          return;
        }
        dispatch(updateTasks(oldTasks));
      }, 0);
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
