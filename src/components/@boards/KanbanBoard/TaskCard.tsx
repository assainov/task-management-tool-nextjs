import type { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cva } from 'class-variance-authority';
import { Ellipsis } from 'lucide-react';
import { Card, CardContent, CardHeader } from 'components/@common/Card';
import { Button } from 'components/@common/Button';
import { Avatar, AvatarFallback, AvatarImage } from 'components/@common/Avatar';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from 'components/@common/DropdownMenu';
import { ColumnId } from './KanbanBoard';

export interface Task {
  id: UniqueIdentifier;
  columnId: ColumnId;
  content: string;
}

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

export type TaskType = 'Task';

export interface TaskDragData {
  type: TaskType;
  task: Task;
}

export function TaskCard({ task, isOverlay = false }: TaskCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task,
    } satisfies TaskDragData,
    attributes: {
      roleDescription: 'Task',
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const variants = cva('rounded-sm hover:bg-gray-50', {
    variants: {
      dragging: {
        over: 'ring-2 opacity-30',
        overlay: 'ring-2 ring-primary',
      },
    },
  });

  const draggingStyle = isDragging ? 'over' : undefined;

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={variants({
        dragging: isOverlay ? 'overlay' : draggingStyle,
      })}
      {...attributes}
      {...listeners}
    >
      <CardHeader className="px-3 py-3 space-between flex flex-row items-start border-secondary relative whitespace-pre-wrap">
        {task.content}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="p-1 text-secondary-foreground/50 h-auto cursor-grab ml-auto"
            >
              <span className="sr-only">Move task</span>
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="px-3 pt-3 pb-6 flex justify-end">
        <Avatar className="h-6 w-6 select-none">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  );
}
