import { SortableContext } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { useMemo } from 'react';
import { Card, CardContent, CardHeader } from 'components/@common/Card';
import { ScrollArea } from 'components/@common/ScrollArea';
import { useTranslation } from 'react-i18next';
import BoardCard from './BoardCard';
import { Task, TaskStatus } from '@/types/tasks.types';

export interface Column {
  id: TaskStatus;
  title: string;
}

export type ColumnType = 'Column';

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
}

export function BoardColumn({ column, tasks }: BoardColumnProps) {
  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);
  const { t } = useTranslation();

  const { setNodeRef } = useDroppable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    } satisfies ColumnDragData,
  });

  return (
    <Card
      ref={setNodeRef}
      className="h-[640px] max-h-[640px] w-[350px] max-w-full bg-primary-foreground flex flex-col flex-shrink-0 snap-center rounded-sm"
    >
      <CardHeader className="p-4 font-semibold text-left uppercase text-slate-600 text-sm flex flex-row space-between items-center">
        {t(column.title)}
      </CardHeader>
      <ScrollArea>
        <CardContent className="flex flex-grow flex-col gap-2 p-2">
          <SortableContext items={tasksIds}>
            {tasks.map((task) => (
              <BoardCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
