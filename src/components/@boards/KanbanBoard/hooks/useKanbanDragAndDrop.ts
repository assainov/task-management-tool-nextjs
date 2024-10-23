import { DragOverEvent, DragStartEvent, UniqueIdentifier } from '@dnd-kit/core';
import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { hasDraggableData } from '../utils/hasDraggableData';
import { Task, TaskStatus } from '@/types/tasks.types';
import { selectTasks, updateTasks } from '@/features/tasks/tasksSlice';

export const useKanbanDragAndDrop = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const onDragStart = (event: DragStartEvent) => {
    if (!hasDraggableData(event.active)) return;
    const draggableData = event.active.data.current;
    setTimeout(() => setActiveTask(draggableData?.task), 0);
  };

  const onDragEnd = () => {
    setTimeout(() => setActiveTask(null), 0);
  };

  const handleTaskOverTask = (
    clonedTasks: Task[],
    activeTaskId: UniqueIdentifier,
    overElementId: UniqueIdentifier,
  ) => {
    const activeTaskIndex = clonedTasks.findIndex((t) => t.id === activeTaskId);
    const overTaskIndex = clonedTasks.findIndex((t) => t.id === overElementId);
    const activeTask = clonedTasks[activeTaskIndex];
    const overTask = clonedTasks[overTaskIndex];

    if (activeTask && overTask && activeTask.status !== overTask.status) {
      activeTask.status = overTask.status;
      const updatedTasks = arrayMove(clonedTasks, activeTaskIndex, overTaskIndex - 1);
      dispatch(updateTasks(updatedTasks));
      return;
    }

    const updatedTasks = arrayMove(clonedTasks, activeTaskIndex, overTaskIndex);
    dispatch(updateTasks(updatedTasks));
  };

  const handleTaskOverColumn = (
    clonedTasks: Task[],
    activeTaskId: UniqueIdentifier,
    overElementId: UniqueIdentifier,
  ) => {
    const activeTaskIndex = clonedTasks.findIndex((t) => t.id === activeTaskId);
    const activeTask = clonedTasks[activeTaskIndex];

    if (activeTask) {
      activeTask.status = overElementId as TaskStatus;
      const updatedTasks = arrayMove(clonedTasks, activeTaskIndex, activeTaskIndex);
      dispatch(updateTasks(updatedTasks));
      return;
    }

    dispatch(updateTasks(clonedTasks));
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeTaskId = active.id;
    const overElementId = over.id;

    if (activeTaskId === overElementId) return;
    if (!hasDraggableData(active) || !hasDraggableData(over)) return;

    const activeElementData = active.data.current;
    const overElementData = over.data.current;

    const isDraggingTask = activeElementData?.type === 'Task';
    const isOverTask = overElementData?.type === 'Task';
    const isOverColumn = overElementData?.type === 'Column';

    if (!isDraggingTask) return;

    const clonedTasks = JSON.parse(JSON.stringify(tasks)) as Task[];

    if (isOverTask) {
      setTimeout(() => handleTaskOverTask(clonedTasks, activeTaskId, overElementId), 0);
    }

    if (isOverColumn) {
      setTimeout(() => handleTaskOverColumn(clonedTasks, activeTaskId, overElementId), 0);
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
