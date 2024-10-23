'use client';

import { createPortal } from 'react-dom';

import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  KeyboardSensor,
  TouchSensor,
  MouseSensor,
} from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { useEffect } from 'react';
import { Skeleton } from 'components/@common/Skeleton';
import { BoardColumn } from './BoardColumn';
import BoardCard from './BoardCard';
import type { Column } from './BoardColumn';
import { coordinateGetter } from './multipleContainersKeyboardPreset';
import { useKanbanEvents } from './useKanbanEvents';
import { TaskStatus } from '@/types/tasks.types';
import { fetchAsync, selectStatus } from '@/features/tasks/tasksSlice';

const columns = [
  {
    id: TaskStatus.New,
    title: 'new',
  },
  {
    id: TaskStatus.InProgress,
    title: 'in_progress',
  },
  {
    id: TaskStatus.Done,
    title: 'done',
  },
] satisfies Column[];

const KanbanBoard = () => {
  const dispatch = useAppDispatch();
  const tasksDownloadStatus = useAppSelector(selectStatus);

  const {
    tasks, activeTask, onDragStart, onDragEnd, onDragOver,
  } = useKanbanEvents();

  useEffect(() => {
    if (tasksDownloadStatus === 'initial') {
      dispatch(fetchAsync());
    }
  }, []);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className="flex gap-4 items-center flex-row">
        {columns.map((col) => (
          tasksDownloadStatus === 'initial' || tasksDownloadStatus === 'loading' ? (
            <Skeleton key={col.id} className="h-[640px] max-h-[640px] w-[350px] max-w-full rounded-sm" />
          )
            : (
              <BoardColumn
                key={col.id}
                column={col}
                tasks={tasks.filter((task) => task.status === col.id)}
              />
            )
        ))}
      </div>
      {typeof window !== 'undefined' && 'document' in window
          && createPortal(
            <DragOverlay>
              {activeTask && <BoardCard task={activeTask} isOverlay />}
            </DragOverlay>,
            document.body,
          )}
    </DndContext>
  );
};

export default KanbanBoard;
