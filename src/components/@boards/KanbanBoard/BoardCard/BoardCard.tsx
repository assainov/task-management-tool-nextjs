import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent, CardHeader } from 'components/@common/Card';
import clsx from 'clsx';
import { Task } from '@/types/tasks.types';
import TaskDropdownMenu from './TaskDropdownMenu';
import TaskAvatar from './TaskAvatar';
import { TaskDragData } from '../config';

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

function BoardCard({ task, isOverlay = false }: TaskCardProps) {
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

  const cardClassNames = clsx(
    'rounded-sm hover:bg-gray-50',
    {
      'ring-2 opacity-30': isDragging && !isOverlay,
      'ring-2 ring-primary': isOverlay,
    },
  );

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cardClassNames}
      {...attributes}
      {...listeners}
    >
      <CardHeader className="px-3 py-3 space-between flex flex-row items-start border-secondary relative whitespace-pre-wrap">
        {task.title}
        <TaskDropdownMenu />
      </CardHeader>
      <CardContent className="px-3 pt-3 pb-6 flex justify-end">
        <TaskAvatar />
      </CardContent>
    </Card>
  );
}

export default BoardCard;
