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
import { Skeleton } from 'components/@common/Skeleton';
import BoardCard from './BoardCard/BoardCard';
import { coordinateGetter } from './utils/multipleContainersKeyboardPreset';
import { useFetchTasks } from './hooks/useFetchTasks';
import { columns } from './config';
import { useKanbanDragAndDrop } from './hooks/useKanbanDragAndDrop';
import BoardColumn from './BoardColumn';

const KanbanBoard = () => {
  const tasksDownloadStatus = useFetchTasks();
  const {
    tasks,
    activeTask,
    onDragStart,
    onDragEnd,
    onDragOver,
  } = useKanbanDragAndDrop();

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter }),
  );

  const renderColumns = () => (
    columns.map((col) => (
      tasksDownloadStatus === 'initial' || tasksDownloadStatus === 'loading' ? (
        <Skeleton key={col.id} className="h-[640px] max-h-[640px] w-[350px] max-w-full rounded-sm" />
      ) : (
        <BoardColumn
          key={col.id}
          column={col}
          tasks={tasks.filter((task) => task.status === col.id)}
        />
      )
    ))
  );

  const renderDraggedProjection = () => (
    typeof window !== 'undefined' && 'document' in window && createPortal(
      <DragOverlay>
        {activeTask && <BoardCard task={activeTask} isOverlay />}
      </DragOverlay>,
      document.body,
    )
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className="flex gap-4 items-center flex-row">
        {renderColumns()}
      </div>
      {renderDraggedProjection()}
    </DndContext>
  );
};

export default KanbanBoard;
