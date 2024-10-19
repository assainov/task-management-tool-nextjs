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
import { BoardColumn } from './BoardColumn';
import BoardCard from './BoardCard';
import type { Column } from './BoardColumn';
import { coordinateGetter } from './multipleContainersKeyboardPreset';
import { useKanbanEvents } from './useKanbanEvents';
import { TaskStatus } from '@/types/tasks.types';

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
  const {
    tasks, activeTask, onDragStart, onDragEnd, onDragOver,
  } = useKanbanEvents();

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
          <BoardColumn
            key={col.id}
            column={col}
            tasks={tasks.filter((task) => task.columnId === col.id)}
          />
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
