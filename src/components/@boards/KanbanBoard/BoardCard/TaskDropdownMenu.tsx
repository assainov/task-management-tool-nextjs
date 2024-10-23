import { Button } from 'components/@common/Button';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from 'components/@common/DropdownMenu';
import { Ellipsis } from 'lucide-react';

const TaskDropdownMenu = () => (
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
);

export default TaskDropdownMenu;
