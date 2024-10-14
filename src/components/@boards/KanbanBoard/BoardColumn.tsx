import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { useDndContext, type UniqueIdentifier } from '@dnd-kit/core';
import { useMemo } from 'react';
import { cva } from 'class-variance-authority';
import { Card, CardContent, CardHeader } from 'components/@common/Card';
import { ScrollArea, ScrollBar } from 'components/@common/ScrollArea';
import { Task, TaskCard } from './TaskCard';

export interface Column {
  id: UniqueIdentifier;
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

  const {
    setNodeRef,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    } satisfies ColumnDragData,
    attributes: {
      roleDescription: `Column: ${ column.title }`,
    },
  });

  return (
    <Card
      ref={setNodeRef}
      className="h-[640px] max-h-[640px] w-[350px] max-w-full bg-primary-foreground flex flex-col flex-shrink-0 snap-center rounded-sm"
    >
      <CardHeader className="p-4 font-semibold text-left uppercase text-slate-600 text-sm flex flex-row space-between items-center">
        {column.title}
      </CardHeader>
      <ScrollArea>
        <CardContent className="flex flex-grow flex-col gap-2 p-2">
          <SortableContext items={tasksIds}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}

export function BoardContainer({ children }: { children: React.ReactNode }) {
  const dndContext = useDndContext();

  const variations = cva('px-2 md:px-0 flex lg:justify-center pb-4', {
    variants: {
      dragging: {
        default: 'snap-x snap-mandatory',
        active: 'snap-none',
      },
    },
  });

  return (
    <ScrollArea
      className={variations({
        dragging: dndContext.active ? 'active' : 'default',
      })}
    >
      <div className="flex gap-4 items-center flex-row ">
        {children}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
